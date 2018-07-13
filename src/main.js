function main() {
    Logger.log(payload.ref)
    Logger.log(`${strftime('%a, %d %b %Y', new Date())}`)
    Logger.log(sendEmail(
        {
            name: "Sender", 
            address: "from@sender.org"
        }, [
            "to@recipient.org"
        ], 
        payload
    ))
}

function doGet(e) {
    var params = JSON.stringify(e);
    return ContentService.createTextOutput(params);
  }

function doPost(e) {
    const scriptProperties = PropertiesService.getScriptProperties()
    const recipient = scriptProperties.getProperty('RECIPIENT_EMAIL') || 'push2email@mailinator.com';

    MailApp.sendEmail({
        to: recipient,
        subject: "[push2email] OHAI",
        htmlBody: "'SUP"
    })

    return ContentService.createTextOutput(`Email sent to ${recipient}`);
}
