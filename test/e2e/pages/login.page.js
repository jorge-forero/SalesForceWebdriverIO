const common = require('./common');

class LoginPage {
    constructor() {
        this.url = '/';
        this.usernameTextField = '#username';
        this.passwordTextField = '#password';
        this.logInButton = '#Login';
        this.errorText = '#error';
    }

    goToLogin() {
        browser.url(this.url);
    }

    setUserTextField(username) {
        common.setTextField(this.usernameTextField, username);
    }

    setPasswordTextField(password) {
        common.setTextField(this.passwordTextField, password);
    }

    clickLoginButton() {
        common.clickButton(this.logInButton);
    }

    getErrorText() {
        return common.getText(this.errorText);
    }
}

module.exports = new LoginPage();
