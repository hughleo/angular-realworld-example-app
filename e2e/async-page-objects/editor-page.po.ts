import { element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../wait-conditions-aysnc';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../models/article-object';
import { ElementWrapper } from '../wrappers/element-wrapper';

export class EditorPage {

    private articleTitle = new ElementWrapper(element(by.name('title')));
    private articleDescription = new ElementWrapper(element(by.name('description')));
    private articleContent =  new ElementWrapper(element(by.name('body')));
    private publishArticleButton = new ElementWrapper(element(by.partialButtonText('Publish Article')));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('editor-page')));
    }

    async addArticle(article: ArticleObject): Promise<ArticlePage> {
        await this.articleTitle.sendKeys(article.ArticleTitle);
        await this.articleDescription.sendKeys(article.ArticleDescription);
        await this.articleContent.sendKeys(article.ArticleBody);
        await this.publishArticleButton.click();
        return new ArticlePage();
    }

    async updateArticleContent(articleContent: string): Promise<EditorPage> {
        await this.articleContent.clearAndSendKeys(articleContent);
        return this;
    }

    async publishArticle(): Promise<ArticlePage> {
        await this.publishArticleButton.click();
        return new ArticlePage();
    }
}
