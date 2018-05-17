class Common {
    static setTextField(webElement, inputString) {
        browser.element(webElement).waitForVisible();
        browser.element(webElement).setValue(inputString);
    }

    static getText(webElement) {
        browser.element(webElement).waitForVisible();
        return browser.element(webElement).getText();
    }

    static clickButton(webElement) {
        browser.element(webElement).waitForEnabled();
        browser.element(webElement).click();
    }

    static waitForVisibility(webElement) {
        browser.element(webElement).waitForVisible();
    }
}

module.exports = Common;