const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');
const credentials = require('../credentials/salesforce.json');


describe('Product', () => {

    beforeEach(() => {
        LoginPage.goToLogin();
        LoginPage.setUserTextField(credentials.valid.username);
        LoginPage.setPasswordTextField(credentials.valid.password);
        LoginPage.clickLoginButton();
        HomePage.waitForHomePage();
    });

    it('should create a new product', () => {
        HomePage.clickHomeTab();
        HomePage.clickCreateNewProduct();
    });
});