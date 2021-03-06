import {browser, protractor, ElementFinder} from 'protractor';

export class WaitConditions {

    static EC = protractor.ExpectedConditions;

    static waitForUrlToContain(url: string, timeout?: number) {

        browser.wait(protractor.ExpectedConditions.urlContains(url), 10000);

        if (!timeout) {
            timeout = 10000;
        }
        browser.wait(this.EC.urlContains(url), timeout);
    }

    static waitForElementToDisplay(element: ElementFinder, timeout?: number) {
        if (!timeout) {
            timeout = 10000;
        }
        browser.wait(this.EC.visibilityOf(element), timeout);
    }
}
