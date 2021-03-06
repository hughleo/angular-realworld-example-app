import { element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../../wait-conditions-aysnc';
import { HomePage } from './home-page.po';
import { User } from '../../models/user';
import { ElementWrapper } from '../../wrappers/element-wrapper';

export class SignIn {

    private emailField = new ElementWrapper(element(by.css('input[name="email"]')));
    private passwordField = new ElementWrapper(element(by.css('input[name="password"]')));
    private signInField = new ElementWrapper(element(by.partialButtonText('Sign in')));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('auth-page')));
    }

    async signIn(user: User): Promise<HomePage> {
        await this.emailField.sendKeys(user.email);
        await this.passwordField.sendKeys(user.password);
        await this.signInField.click();
        return new HomePage();
    }
}
