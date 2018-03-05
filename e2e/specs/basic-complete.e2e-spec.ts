import { HomePage } from './../page-objects/basic/home-page.po';
import { ArticlePage } from './../page-objects/basic/article-page.po';
import { EditorPage } from './../page-objects/basic/editor-page.po';
import { ArticleBuilder } from './../models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './../models/user-builder';
import { GlobalFeed } from './../page-objects/basic/global-feed.po';
import { ArticleObject } from './../models/article-object';
import { NavBar } from './../page-objects/basic/navbar.po';

describe('example tests', () => {
  let homePage: HomePage;
  let navbar: NavBar
  let editorPage: EditorPage;
  let articlePage: ArticlePage;
  let globalFeed: GlobalFeed;
  let articleObject: ArticleObject;

  const email = browser.params.user.email;
  const password = browser.params.user.password;

  beforeEach(() => {
    homePage = new HomePage();
    navbar = new NavBar();
    homePage.navigateTo();
  });

  afterEach(() => {
    navbar.navigateToSettings().doLogout();
  });


  it('should nagivate to create new article page', () => {
    navbar.navigateToSignIn().signInWith(email, password);
    editorPage = navbar.navigateToCreateNewArticle();
  });

  it('should nagivate to create new article using user builder', () => { 
    navbar.navigateToSignIn().signIn(new UserBuilder().default().build());
    editorPage = navbar.navigateToCreateNewArticle();
    editorPage.articleTitleIsDisplayed().then((isDisplayed) => {
      expect(isDisplayed).toBe(true);
    });
  });

});
