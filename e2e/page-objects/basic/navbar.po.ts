import { element, by } from 'protractor';
import { SignIn } from './sign-in.po';
import { HomePage } from './home-page.po';
import { Settings } from './settings.po';
import { EditorPage } from './editor-page.po';

export class NavBar {

    private home = element(by.css('a[href="/"]'));
    private signIn = element(by.partialLinkText('Sign in'));
    private signUp = element(by.css('a[href="/register"]'));
    private settings = element(by.css('a[href="/settings"]'));
    private newArticle = element(by.css('a[href="/editor"]'));

    goHome(): HomePage {
        this.home.click();
        return new HomePage();
    }

    navigateToSignIn(): SignIn {
        this.signIn.click();
        return new SignIn();
    }

    navigateToCreateNewArticle(): EditorPage {
        this.newArticle.click();
        return new EditorPage();
    }

    navigateToSettings(): Settings {
        this.settings.click();
        return new Settings();
    }
}
