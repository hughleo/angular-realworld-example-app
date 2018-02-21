import { HomePage } from './async-page-objects/home-page.po';
import { NavBar } from './async-page-objects/navbar.po';
import { ArticlePage } from './async-page-objects/article-page.po';
import { EditorPage } from './async-page-objects/editor-page.po';
import { ArticleBuilder } from './models/article-builder';
import { browser, element, by } from 'protractor';
import { UserBuilder } from './models/user-builder';
import { ElementWrapper } from './wrappers/element-wrapper';
import { Settings } from './async-page-objects/settings.po';


describe('Open the google page', () => {
   let homePage: HomePage;
   let navbar: NavBar;

  beforeEach(async () => {
    homePage = new HomePage();
    navbar = new NavBar();
    await homePage.navigateTo();

    const signIn = await navbar.navigateToSignIn();
    await signIn.signIn(new UserBuilder().build());
    // await navbar.navigateToSignIn().then(async (signIn) => {
    //   await signIn.signIn(new UserBuilder().build());
    // });
  });

  // afterEach(async () => {
  //   settings = await navbar.navigateToSettings();
  //   await settings.doLogout();
  // });

  it('should add article', async () => {

    const articleObject = new ArticleBuilder().build();
    const editorPage = await navbar.navigateToCreateNewArticle();
    const articlePage = await editorPage.addArticle(articleObject);
    const content = await articlePage.getArticleContent();
    expect(content).toContain(articleObject.ArticleBody);

  });

  // it('should add article', () => {
  //   const articleObject = new ArticleBuilder().build();
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.getArticleContent().then((articleContent) => {
  //     expect(articleContent).toContain(articleObject.ArticleBody);
  //   })
  // });

  xit('should add then delete article', async () => {
    const articleObject = new ArticleBuilder().build();
    const editorPage = await navbar.navigateToCreateNewArticle();
    const articlePage = await editorPage.addArticle(articleObject);
    // let articlePage = await navbar.navigateToCreateNewArticle().then((editorPage => {
    //   return editorPage.addArticle(articleObject);
    // }))
    await articlePage.deleteArticle();
  });

  // it('should add then edit article', () => {
  //   editorPage = navbar.navigateToCreateNewArticle();
  //   articlePage = editorPage.addArticle(new ArticleBuilder().build());
  //   articlePage.editArticle();
  //   editorPage.addDescription('newText');
  // });
// });
  });
