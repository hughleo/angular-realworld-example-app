import { HomePage } from './../page-objects/basic/home-page.po';
import { ArticlePage } from './../page-objects/basic/article-page.po';
import { EditorPage } from './../page-objects/basic/editor-page.po';
import { ArticleBuilder } from './../models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './../models/user-builder';
import { GlobalFeed } from './../page-objects/basic/global-feed.po';
import { ArticleObject } from './../models/article-object';
import { NavBar } from './../page-objects/basic/navbar.po';
import { YourFeed } from './../page-objects/basic/your-feed.po';
import { SignIn } from './../page-objects/basic/sign-in.po';

describe('example tests', () => {
  let homePage: HomePage;
  let navbar: NavBar
  let editorPage: EditorPage;
  let articlePage: ArticlePage;
  let globalFeed: GlobalFeed;
  let articleObject: ArticleObject;

  afterEach(() => {
    navbar.navigateToSettings().doLogout();
  });


  fit('should nagivate to create new article page', () => {
    homePage = new HomePage();
    const email = browser.params.user.email;
    const password = browser.params.user.password;
    console.log('test 1');
    navbar = new NavBar();
    console.log('test 2');
    homePage.navigateTo();
    navbar.navigateToSignIn().signInWith(email, password);
    console.log('test 3');
    editorPage = navbar.navigateToCreateNewArticle();
  });

  it('should nagivate to create new article using user builder', () => {
    homePage = new HomePage();
    navbar = new NavBar();
    homePage.navigateTo();
    navbar.navigateToSignIn().signIn(new UserBuilder().default().build());
    editorPage = navbar.navigateToCreateNewArticle();
    editorPage.articleTitleIsDisplayed().then((isDisplayed) => {
      expect(isDisplayed).toBe(true);
    });
  });

});
