import { element, by } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';

export class ProfilePage {

    private yourFeed = element(by.partialLinkText('Your Feed'));
    private globalFeed = element(by.partialLinkText('Global Feed'));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('home-page')));
    }

    favoriteArticle(articleName: string): ProfilePage  {
        element(by.xpath('//h1[.="' + articleName + '"]/../..//favorite-button/button'));
        return this;
    }
}
