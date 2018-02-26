import {browser, protractor, ElementFinder} from 'protractor';

export class WaitConditions {

    static EC = protractor.ExpectedConditions;

    static waitForUrlToContain(url: string, timeout?: number) {
        if (!timeout) {
            timeout = 10000;
        }
        browser.wait(this.EC.urlContains(url), timeout, 'Wait for url to contain ' + url);
    }

    static waitForElementToDisplay(element: ElementFinder, timeout?: number) {
        if (!timeout) {
            timeout = 10000;
        }
        browser.wait(this.EC.visibilityOf(element), timeout, 'Wait for element with locator ' + element.locator);
    }
}
