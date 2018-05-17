const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');
const credentials = require('../credentials/salesforce.json');


describe('Login', () => {

    beforeEach(() => {
        LoginPage.goToLogin();
    });

    it('should show a error message using wrong credentials', () => {
        LoginPage.setUserTextField(credentials.invalid.username);
        LoginPage.setPasswordTextField(credentials.invalid.password);
        LoginPage.clickLoginButton();
        expect(LoginPage.getErrorText()).to.contains('Please check your username and password');
    });

    it('should login', () => {
        LoginPage.setUserTextField(credentials.valid.username);
        LoginPage.setPasswordTextField(credentials.valid.password);
        LoginPage.clickLoginButton();
        expect(HomePage.getUserNameLabelText()).to.contains(credentials.valid.name)
    });
});