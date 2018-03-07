import { HomePage } from './../page-objects/complete/home-page.po';
import { NavBar } from './../page-objects/complete/navbar.po';
import { ArticlePage } from './../page-objects/complete/article-page.po';
import { EditorPage } from './../page-objects/complete/editor-page.po';
import { ArticleBuilder } from './../models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './../models/user-builder';
import { GlobalFeed } from './../page-objects/complete/global-feed.po';
import { ArticleObject } from './../models/article-object';


describe('complete tests', () => {
  let homePage: HomePage;
  let navbar: NavBar;
  let editorPage: EditorPage;
  let articlePage: ArticlePage;
  let globalFeed: GlobalFeed;
  let articleObject: ArticleObject;

  beforeEach(() => {
    articleObject = new ArticleBuilder().build();
    homePage = new HomePage();
    navbar = new NavBar();
    homePage.navigateTo();
    navbar.navigateToSignIn().signIn(new UserBuilder().build());
  });

  afterEach(() => {
    navbar.navigateToSettings().doLogout();
  });


  it('should nagivate to create new article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    editorPage.articleTitleIsDisplayed().then((isDisplayed) => {
      expect(isDisplayed).toBe(true);
    });
  });


  it('should add article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.getArticleContent().then((articleContent) => {
      expect(articleContent).toContain(articleObject.ArticleBody);
    });
  });

  it('should add comment to article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.addComment('awesome article');
    articlePage.getFirstComment().then((comment) => {
      expect(comment.trim()).toBe('awesome article');
    });
  });

  it('should add then delete article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.deleteArticle();
    globalFeed = homePage.switchToGlobalFeed();
    globalFeed.isArticleDisplayed(articleObject.ArticleTitle).then((isDisplayed) => {
      expect(isDisplayed).toBe(false);
    });
  });

  it('should add then edit article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.editArticle();
    editorPage.updateArticleContent('newText');
    editorPage.publishArticle();
    browser.sleep(5000);
    articlePage.getArticleContent().then((articleContent) => {
      expect(articleContent).toContain('newText');
    });
  });
});
