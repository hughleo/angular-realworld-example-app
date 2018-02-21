import { element, by, browser } from 'protractor';
import { WaitConditions } from '../wait-conditions';
import { HomePage } from './home-page.po';
import { ElementWrapper } from '../wrappers/element-wrapper';

export class Settings {

    private page = element(by.className('settings-page'));
    private logout = new ElementWrapper(element(by.css('button[class="btn btn-outline-danger"]')));

    constructor() {
        WaitConditions.waitForElementToDisplay(this.page);
    }

    doLogout(): HomePage {
        this.logout.jsClick();
        return new HomePage();
    }
}
