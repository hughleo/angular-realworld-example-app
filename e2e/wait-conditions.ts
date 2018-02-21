import {browser, protractor, ElementFinder} from 'protractor';

export class WaitConditions {

    static EC = protractor.ExpectedConditions;

    static async waitForUrlToContain(url: string, timeout?: number) {
        if (!timeout) {
            timeout = 10000;
        }
        await browser.wait(this.EC.urlContains(url), timeout, 'Wait for url to contain ' + url);
    }

    static async waitForElementToDisplay(element: ElementFinder, timeout?: number) {
        if (!timeout) {
            timeout = 10000;
        }
        await browser.wait(this.EC.visibilityOf(element), timeout, 'Wait for element with locator ' + element.locator);
    }
}
