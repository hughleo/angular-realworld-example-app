import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';

export class ProfilePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    constructor() {
        WaitConditions.waitForElementToDisplay(element(by.className('profile-page')));
    }

    async favoriteArticle(articleName: string): Promise<ProfilePage>  {
        await element(by.xpath('//h1[.="' + articleName + '"]/../..//favorite-button/button'));
        return this;
    }
}
