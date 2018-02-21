import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';

export class HomePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    async navigateTo() {
        await browser.get('/');
        WaitConditions.waitForElementToDisplay(element(by.className('home-page')));
        return new HomePage();
    }


    async switchToYourFeed<T>(c: { new(): T; }): Promise<T>  {
        await this.yourFeed.click();
        return new c();
    }
}
