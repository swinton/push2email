# push2email

## Setup

1. Clone this repo
1. Install dependencies `npm install`
1. Install Clasp `npm i @google/clasp -g`, `clasp login`
1. Create a Clasp project `clasp create push2email`

## Build

1. `npm run-script build`

## Deploy

1. Push the project: `clasp push`
1. Deploy the project: `clasp deploy`

## Authorize

1. Open your project in your browser: `clasp open`
1. ...

## Configure script properties

To specify an email address to which push event details will be delivered:

1. Open your project in your browser: `clasp open`
1. Navigate to `File` > `Project properties`, select the `Script properties` tab
1. Add a new row, enter `RECIPIENT_EMAIL` as the property, and a valid email address as the value

## Get your project's webhook URL

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