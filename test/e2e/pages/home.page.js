const common = require('./common');

class HomePage {
    constructor() {
        this.userNameLabel = '#userNavLabel';
        this.homeTabButton = '#home_Tab';
        this.createNewButton = '#createNewButton';
        this.newProductOption = '.productMru';
    }

    getUserNameLabelText() {
        return common.getText(this.userNameLabel);
    }

    clickHomeTab() {
        common.clickButton(this.homeTabButton);
    }

    clickCreateNewProduct() {
        common.clickButton(this.createNewButton);
        common.clickButton(this.newProductOption);
    }

    waitForHomePage() {
        common.waitForVisibility(this.userNameLabel);
    }


}

module.exports = new HomePage();
