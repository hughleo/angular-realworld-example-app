import { element, by, browser } from 'protractor';
import { WaitConditions } from '../wait-conditions';
import { HomePage } from './home-page.po';
import { ElementWrapper } from '../wrappers/element-wrapper';

export class Settings {

    private logout = element(by.css('button[class="btn btn-outline-danger"]'));
    private page = element(by.className('settings-page'));
    private lg = new ElementWrapper(element(by.css('button[class="btn btn-outline-danger"]')));

    constructor() {
        WaitConditions.waitForElementToDisplay(this.page);
    }

    async doLogout(): Promise<HomePage> {
        await this.lg.jsClick();
        return new HomePage();
    }
}
