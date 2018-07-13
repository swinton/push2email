function doPost(e) {
    const data = JSON.parse(e.postData.contents)
    const scriptProperties = PropertiesService.getScriptProperties()
    const recipient = scriptProperties.getProperty('RECIPIENT_EMAIL') || 'push2email@mailinator.com';

    sendEmail(data, recipient)

    return ContentService.createTextOutput(`Email sent to ${recipient}`);
}
