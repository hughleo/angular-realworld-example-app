import { browser, element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../wait-conditions-aysnc';
import { GlobalFeed } from '../page-objects/global-feed.po';
import { YourFeed } from '../page-objects/your-feed.po';

export class HomePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    async navigateTo() {
        await browser.get('/');
        WC.waitForElementToDisplay(element(by.className('home-page')));
        return new HomePage();
    }


    async switchFeed<T>(c: { new(): T; }): Promise<T>  {
        await this.yourFeed.click();
        return new c();
    }

    async switchToYourFeed(): Promise<YourFeed> {
        this.yourFeed.click();
        return new YourFeed();
    }

    async switchToGlobalFeed(): Promise<GlobalFeed>  {
        this.globalFeed.click();
        return new GlobalFeed();
    }
}
