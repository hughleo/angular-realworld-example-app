import { Ng2RealApp } from './page-objects/app.po';
import { HomePage } from './page-objects/home-page.po';
import { NavBar } from './page-objects/navbar.po';
import { ArticlePage } from './page-objects/article-page.po';
import { EditorPage } from './page-objects/editor-page.po';
import { ArticleBuilder } from './models/article-builder';
import { browser } from 'protractor';
import { UserBuilder } from './models/user-builder';


describe('example tests', () => {
  let homePage: HomePage;
  let navbar: NavBar;
  let editorPage: EditorPage;
  let articlePage: ArticlePage;

  // beforeEach(() => {
  //   homePage = new HomePage();
  //   navbar = new NavBar();
  //   homePage.navigateTo();
  //   navbar.navigateToSignIn().signIn(new UserBuilder().build());
  // });

  // afterEach(() => {
  //   navbar.navigateToSettings().doLogout();
  // });



  // it('should add article', () => {
  //   const articleObject = new ArticleBuilder().build();
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.getArticleContent().then((articleContent) => {
  //     expect(articleContent).toContain(articleObject.ArticleBody);
  //   })
  // });

  // it('should add article', () => {
  //   const articleObject = new ArticleBuilder().build();
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.getArticleContent().then((articleContent) => {
  //     expect(articleContent).toContain(articleObject.ArticleBody);
  //   })
  // });


  // it('should add then delete article', () => {
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.deleteArticle();
  // });

  // it('should add then edit article', () => {
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.editArticle();
  //   editorPage.addDescription('newText');
  // });
});
