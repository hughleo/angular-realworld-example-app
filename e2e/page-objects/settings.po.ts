import { element, by } from 'protractor';
import { WaitConditions as WC } from '../wait-conditions';
import { HomePage } from './home-page.po';
import { ElementWrapper } from '../wrappers/element-wrapper';

export class Settings {

    private logout = new ElementWrapper(element(by.css('button[class="btn btn-outline-danger"]')));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('settings-page')));
    }

    doLogout(): HomePage {
        this.logout.jsClick();
        return new HomePage();
    }
}
