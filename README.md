# push2email

> A self-hosted [Google Apps Script](https://developers.google.com/apps-script/) project that delivers [push event](https://developer.github.com/v3/activity/events/types/#pushevent) details to your inbox

`push2email` may be used as a self-hosted replacement to the [email service](https://github.com/github/github-services/blob/f9e3a6b98d76d9964a6613d581164039b8d54d89/lib/services/email.rb) that is [due to be deprecated](https://developer.github.com/changes/2018-04-25-github-services-deprecation/) on January 31, 2019.

## Installation

1. [Setup](#setup)
1. [Build](#build)
1. [Deploy](#deploy)
1. [Authorize](#authorize)
1. [Configure script properties](#configure-script-properties)
1. [Get your project's webhook URL](#get-your-projects-webhook-url)
1. [Configure your repository to send `push` event to your project's webhook URL](#configure-your-repository-to-send-push-event-to-your-projects-webhook-url)

### Setup

1. Clone this repo
1. Install dependencies `npm install`
1. Install Google's Clasp `npm i @google/clasp -g`, `clasp login`
1. Create a Clasp project `clasp create push2email`

### Build

1. `npm run-script build`

### Deploy

1. Push the project: `clasp push`
1. Deploy the project: `clasp deploy`

### Authorize

1. Open your project in your browser: `clasp open`
1. ...

### Configure script properties

To specify an email address to which push event details will be delivered:

1. Open your project in your browser: `clasp open`
1. Navigate to `File` > `Project properties`, select the `Script properties` tab
1. Add a new row, enter `RECIPIENT_EMAIL` as the property, and a valid email address as the value

### Get your project's webhook URL

Once deployed, you can lookup the webhook URL for your project.

Your project's webhook URL is of the form:

```
https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec
```

Where `${DEPLOYMENT_ID}` is the ID of a deployment of your project. To look up the deployments with Clasp, run `clasp deployments`, this will generate output like the following:

```
2 Deployments.
- AKfycbw6KfHThp5GkM4PJfvHVSts-8g1jBjtcN-kOYfjyg @HEAD
- AKfycbwOgu_KUrNGOKmyj7oCI2rsZemH9y9PMOcC5tomM_6iibfoUUJ2vM3wZC740X2IzBk @1
```

So, in this instance, the deployment ID for version 1 (indicated by `@1` in the above output) is `AKfycbwOgu_KUrNGOKmyj7oCI2rsZemH9y9PMOcC5tomM_6iibfoUUJ2vM3wZC740X2IzBk`. The webhook URL for this deployment, therefore, is `https://script.google.com/macros/s/AKfycbx7mw535PmMPqUzXMPCI_0GQ5aLAZfDbqiNSiQAYEWbd2RXLj8LtMMlgu7XHUMnbDg/exec`.

### Configure your repository to send `push` event to your project's webhook URL

Configure a webhook via your repository's settings page.

1. Payload URL is [your project's webhook URL](#get-your-projects-webhook-url)
1. Content type is `application/json`
1. Trigger the webhook with just the `push` event
1. Make sure it's set to active :white_check_mark:

You're all set :rocket:
