import { element, by } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../../models/article-object';
import { ElementWrapper } from '../../wrappers/element-wrapper';

export class EditorPage {

    private articleTitle = new ElementWrapper(element(by.name('title')));
    private articleDescription = new ElementWrapper(element(by.name('description')));
    private articleContent = new ElementWrapper(element(by.name('body')));
    private publishArticleButton = new ElementWrapper(element(by.partialButtonText('Publish Article')));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('editor-page')));
    }

    articleTitleIsDisplayed() {
        return this.articleTitle.isPresent();
    }

    addArticle(article: ArticleObject): ArticlePage {
        this.articleTitle.sendKeys(article.ArticleTitle);
        this.articleDescription.sendKeys(article.ArticleDescription);
        this.articleContent.sendKeys(article.ArticleBody);
        this.publishArticleButton.jsClick();
        return new ArticlePage();
    }

    updateArticleContent(articleBody: string): EditorPage {
        this.articleContent.clearAndSendKeys(articleBody);
        return this;
    }

    publishArticle(): ArticlePage {
        this.publishArticleButton.click();
        return new ArticlePage();
    }
}
