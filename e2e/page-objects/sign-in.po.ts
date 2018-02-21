import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';
import { HomePage } from './home-page.po';
import { User } from '../models/user';

export class SignIn {

    private emailField = element(by.css('input[name="email"]'));
    private passwordField = element(by.css('input[name="password"]'));
    private signInField = element(by.partialButtonText('Sign in'));

    constructor() {
        WaitConditions.waitForElementToDisplay(element(by.className('auth-page')));
    }

    signIn(user: User): HomePage {
        this.emailField.sendKeys(user.email);
        this.passwordField.sendKeys(user.password);
        this.signInField.click();
        return new HomePage();
    }
}
