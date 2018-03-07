import { browser, element, by } from 'protractor';
import { YourFeed } from './your-feed.po';
import { GlobalFeed } from './global-feed.po';

export class HomePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    navigateTo(): HomePage {
        browser.get('/');
        return new HomePage();
    }

    clickYourFeed<T>(c: { new(): T; }): T {
        this.yourFeed.click();
        return new c();
    }

    switchToGlobalFeed(): GlobalFeed  {
        this.globalFeed.click();
        return new GlobalFeed();
    }
}
