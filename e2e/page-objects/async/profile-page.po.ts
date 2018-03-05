import { element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../../wait-conditions-aysnc';

export class ProfilePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('profile-page')));
    }

    async favoriteArticle(articleName: string): Promise<ProfilePage>  {
        await element(by.xpath('//h1[.="' + articleName + '"]/../..//favorite-button/button'));
        return this;
    }
}
