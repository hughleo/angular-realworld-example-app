import { browser, element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../../wait-conditions-aysnc';
import { YourFeed } from './your-feed.po';
import { GlobalFeed } from './global-feed.po';


export class HomePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    async navigateTo() {
        await browser.get('/');
        WC.waitForElementToDisplay(element(by.className('home-page')));
        return new HomePage();
    }

    async clickYourFeed<T>(c: { new(): T; }): Promise<T> {
        await this.yourFeed.click();
        return new c();
    }

    async clickGlobalFeed(): Promise<GlobalFeed>  {
        await this.globalFeed.click();
        return new GlobalFeed();
    }
}
