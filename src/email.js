// const strftime = require('strftime')
// const nodemailer = require('nodemailer')
// const sgTransport = require('nodemailer-sendgrid-transport')
// const process = require('process')

function sendEmail(sender, addresses, payload) {
//   let options = {
//     auth: {
//       api_key: process.env.SENDGRID_APIKEY
//     }
//   }

//  let client = nodemailer.createTransport(sgTransport(options))

  let nameWithOwner = payload.repository.full_name
  let firstCommitSha = payload.commits[0].id.slice(0, 8)
  let firstCommitTitle = payload.commits[0].message
  let subject = `[${nameWithOwner}] ${firstCommitSha}: ${firstCommitTitle}`

  let body = `Branch: ${payload.ref}
  Home:   ${payload.repository.html_url}
  `

  payload.commits.forEach((commit) => {
    body += commitText(commit)
  })

  if (payload.commits[0].id !== payload.commits[payload.length - 1]) {
    body += `Compare: ${payload.compare}\n`
  }

  // Strip leading whitespaces from body
  body = body.replace(/^ {2}/gm, '')

  addresses.forEach((address) => {
    // Message object
    let message = {
      from: `${sender.name} <${sender.address}>`,
      to: address,
      subject: subject,
      text: body,
      html: `<pre>${body}</pre>`
    }

    // client.sendMail(message, (err, info) => {
    //   if (err) {
    //     console.log(`Error occurred: ${err.message}`)
    //   } else {
    //     console.log(`Message sent: ${info.response}`)
    //   }
    // })
  })

  return body
}

function commitText(commit) {
  let added = commit.added.map(f => ['A', f])
  let removed = commit.removed.map(f => ['R', f])
  let modified = commit.modified.map(f => ['M', f])

  let changedPaths = [...added, ...removed, ...modified].sort(function (_char, file) {
    return file
  }).map(entry => `${entry[0]} ${entry[1]}`).join('\n    ')

  let commitAuthor = `${commit.author.name} <${commit.author.email}>`
  let text = `Commit: ${commit.id}
      ${commit.url}
  Author: ${commitAuthor}
  Date:   ${commit.timestamp} (${strftime('%a, %d %b %Y', new Date(commit.timestamp))})`

  if (changedPaths.length > 0) {
    text += `

  Changed paths:
    ${changedPaths}`
  }

  text += `

  Log Message:
  -----------
  ${commit.message}

  `

  return text
}