import { element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../../wait-conditions-aysnc';
import { HomePage } from './home-page.po';
import { ElementWrapper } from '../../wrappers/element-wrapper';

export class Settings {

    private logout = new ElementWrapper(element(by.id('logout')));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('settings-page')));
    }

    async doLogout(): Promise<HomePage> {
        await this.logout.click();
        return new HomePage();
    }
}
