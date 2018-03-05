import { element, by, browser } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';
import { HomePage } from './home-page.po';
import { User } from '../../models/user';
import { UserBuilder } from '../../models/user-builder';

export class SignIn {

    private emailField = element(by.css('input[name="email"]'));
    private passwordField = element(by.css('input[name="password"]'));
    private signInField = element(by.partialButtonText('Sign in'));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('auth-page')));
    }

    signIn(user: User): HomePage {
        this.emailField.sendKeys(user.email);
        this.passwordField.sendKeys(user.password);
        this.signInField.click();
        return new HomePage();
    }

    signInWith(email: string, password: string): HomePage {
        this.emailField.sendKeys(email);
        this.passwordField.sendKeys(password);
        this.signInField.click();
        return new HomePage();
    }
}
