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
    private publishArticleButton = element(by.partialButtonText('Publish Article'));

    constructor() {
        WaitConditions.waitForElementToDisplay(element(by.className('editor-page')));
    }

    addArticle(article: ArticleObject): ArticlePage {
        this.articleTitle.sendKeys(article.ArticleTitle);
        this.articleDescription.sendKeys(article.ArticleDescription);
        this.article.sendKeys(article.ArticleBody);
        this.publishArticleButton.click();
        return new ArticlePage();
    }

    addDescription(articleDescription: string): EditorPage {
        this.articleDescription.clearAndSendKeys(articleDescription);
        return this;
    }

    publishArticle(): ArticlePage {
        this.publishArticleButton.click();
        return new ArticlePage();
    }
}
