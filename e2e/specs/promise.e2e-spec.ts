import { HomePage } from './../page-objects/promise/home-page.po';
import { NavBar } from './../page-objects/promise/navbar.po';
import { ArticlePage } from './../page-objects/promise/article-page.po';
import { EditorPage } from './../page-objects/promise/editor-page.po';
import { ArticleBuilder } from './../models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './../models/user-builder';
import { GlobalFeed } from './../page-objects/promise/global-feed.po';
import { ArticleObject } from './../models/article-object';


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


  it('should nagivate to create new article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    // editorPage.articleTitleIsDisplayed().then((isDisplayed) => {
    //   expect(isDisplayed).toBe(true);
    // });
  });


  xit('should add article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    // add article
  });


  xit('should add article and check it was added', () => {
    editorPage = navbar.navigateToCreateNewArticle();
    // add article as above

    // then get article content by resolving promise and expect against content

  });

  xit('should add comment to article', () => {
    editorPage = navbar.navigateToCreateNewArticle();
     // add article as above

     // add call to add comment to article


     // add call to get comment and check it's content (method is there
  });

  xit('should add then delete article', () => {
    editorPage = navbar.navigateToCreateNewArticle();

    // add article as above

    // delete the article -> this should take you to home page. add the method for this

    // switch to global feed
    globalFeed = homePage.switchToGlobalFeed();

    // check if article displayed
  });

  xit('should add then edit article', () => {

  });
});
