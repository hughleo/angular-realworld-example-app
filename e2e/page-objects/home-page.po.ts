import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';

export class HomePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    navigateTo(): HomePage {
        browser.get('/');
        return new HomePage();
    }

    switchToYourFeed<T>(c: { new(): T; }): T  {
        this.yourFeed.click();
        return new c();
    }
}
