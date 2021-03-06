import { HomePage } from './../page-objects/async/home-page.po';
import { NavBar } from './../page-objects/async/navbar.po';
import { ArticlePage } from './../page-objects/async/article-page.po';
import { EditorPage } from './../page-objects/async/editor-page.po';
import { ArticleBuilder } from './../models/article-builder';
import { browser, element, by } from 'protractor';
import { UserBuilder } from './../models/user-builder';
import { ElementWrapper } from './../wrappers/element-wrapper';
import { Settings } from './../page-objects/async/settings.po';
import { ArticleObject } from './../models/article-object';
const faker = require('faker');

describe('End to end scenarios', () => {
   let homePage: HomePage;
   let navbar: NavBar;
   let articleObject: ArticleObject;
   let articlePage: ArticlePage;
   let editorPage: EditorPage;
 

  beforeEach(async () => {
    homePage = new HomePage();
    navbar = new NavBar();
    articleObject = new ArticleBuilder().build();
    await homePage.navigateTo();

    const signIn = await navbar.navigateToSignIn();
    await signIn.signIn(new UserBuilder().build());
    
  });

  afterEach(async () => {
    const settings = await navbar.navigateToSettings();
    settings.doLogout();
  });

  fit('should add article', async () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(faker.lorem.sentence(), 'test', 'test');

    
  });

  it('should add comment to article', async () => {
    
  });

  it('should add then delete article', async () => {
    
  });

  it('should add then edit article', async () => {
    
  });
});
