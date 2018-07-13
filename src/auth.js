function getAuthUrl() {
    // https://developers.google.com/apps-script/reference/script/script-app#getAuthorizationInfo(AuthMode)
    const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)
    return authInfo.getAuthorizationUrl()
}
