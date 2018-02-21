import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../models/article-object';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { ElementWrapper } from '../wrappers/element-wrapper';

export class EditorPage {

    private articleTitle = new ElementWrapper(element(by.name('title')));
    private articleDescription = new ElementWrapper(element(by.name('description')));
    private article = element(by.name('body'));
    private publishArticleButton = new ElementWrapper(element(by.partialButtonText('Publish Article')));

    constructor() {
        WaitConditions.waitForElementToDisplay(element(by.className('editor-page')));
    }

    async addArticle(article: ArticleObject): Promise<ArticlePage> {
        await this.articleTitle.sendKeys(article.ArticleTitle);
        await this.articleDescription.sendKeys(article.ArticleDescription);
        await this.article.sendKeys(article.ArticleBody);
        await this.publishArticleButton.click();
        return new ArticlePage();
    }

    async addDescription(articleDescription: string): Promise<EditorPage> {
        await this.articleDescription.clearAndSendKeys(articleDescription);
        return this;
    }

    async publishArticle(): Promise<ArticlePage> {
        await this.publishArticleButton.click();
        return new ArticlePage();
    }
}
