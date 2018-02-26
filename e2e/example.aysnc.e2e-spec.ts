import { HomePage } from './async-page-objects/home-page.po';
import { NavBar } from './async-page-objects/navbar.po';
import { ArticlePage } from './async-page-objects/article-page.po';
import { EditorPage } from './async-page-objects/editor-page.po';
import { ArticleBuilder } from './models/article-builder';
import { browser, element, by } from 'protractor';
import { UserBuilder } from './models/user-builder';
import { ElementWrapper } from './wrappers/element-wrapper';
import { Settings } from './async-page-objects/settings.po';
import { ArticleObject } from './models/article-object';


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
    editorPage = await navbar.navigateToCreateNewArticle();
    articlePage = await editorPage.addArticle(articleObject);
  });

  afterEach(async () => {
    const settings = await navbar.navigateToSettings();
    await settings.doLogout();
  });

  it('should add article', async () => {
    const content = await articlePage.getArticleContent();
    expect(content).toContain(articleObject.ArticleBody);
  });

  it('should add comment to article', async () => {
    await articlePage.addComment('awesome article');
    const comment = await articlePage.getFirstComment();
    expect(comment.trim()).toBe('awesome article');
  });

  it('should add then delete article', async () => {
    await articlePage.deleteArticle();
    const globalFeed = await homePage.switchToGlobalFeed();
    const articleDisplayed = await globalFeed.isArticleDisplayed(articleObject.ArticleTitle);
    expect(articleDisplayed).toBe(false);
  });

  it('should add then edit article', async () => {
    await articlePage.editArticle();
    await editorPage.updateArticleContent('newText');
    await editorPage.publishArticle();
    const articleContent = await articlePage.getArticleContent();
    expect(articleContent).toContain('newText');
  });

});
