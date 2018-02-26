import { browser, element, by } from 'protractor';
import { SignIn } from './sign-in.po';
import { HomePage } from './home-page.po';
import { EditorPage } from './editor-page.po';
import { Settings } from './settings.po';

export class NavBar {

    private home = element(by.css('a[href="/"]'));
    private signIn = element(by.partialLinkText('Sign in'));
    private signUp = element(by.css('a[href="/register"]'));
    private settings = element(by.css('a[href="/settings"]'));
    private newArticle = element(by.css('a[href="/editor"]'));

    async goHome(): Promise<HomePage> {
        await this.home.click();
        return new HomePage();
    }

    async navigateToSignIn() {
        await browser.findElement(by.partialLinkText('Sign in')).click();
        return new SignIn();
    }

    async navigateToCreateNewArticle(): Promise<EditorPage> {
        await this.newArticle.click();
        return new EditorPage();
    }

    async navigateToSettings(): Promise<Settings> {
        await this.settings.click();
        return new Settings();
    }
}
