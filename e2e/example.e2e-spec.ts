import { HomePage } from './page-objects/home-page.po';
import { NavBar } from './page-objects/navbar.po';
import { ArticlePage } from './page-objects/article-page.po';
import { EditorPage } from './page-objects/editor-page.po';
import { ArticleBuilder } from './models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './models/user-builder';
import { GlobalFeed } from './page-objects/global-feed.po';
import { exec } from 'child_process';
import { ArticleObject } from './models/article-object';


describe('example tests', () => {
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



  it('should add article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.getArticleContent().then((articleContent) => {
      expect(articleContent).toContain(articleObject.ArticleBody);
    })
  });

  it('should add comment to article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.addComment('awesome article');
    articlePage.getFirstComment().then((comment) => {
      expect(comment.trim()).toBe('awesome article');
    })
  });


  fit('should add then delete article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.deleteArticle();
    globalFeed = homePage.switchToGlobalFeed();
    globalFeed.isArticleDisplayed(articleObject.ArticleTitle).then((isDisplayed) => {
      expect(isDisplayed).toBe(false);
    })
  });

  it('should add then edit article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    articlePage = editorPage.addArticle(articleObject);
    articlePage.editArticle();
    editorPage.updateArticleContent('newText');
    editorPage.publishArticle();
    articlePage.getArticleContent().then((articleContent) => {
      expect(articleContent).toContain('newText');
    })
  });
});
