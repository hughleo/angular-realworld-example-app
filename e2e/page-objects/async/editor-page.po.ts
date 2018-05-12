import { element, by, browser } from 'protractor';
import { WaitConditionsAsync as WC } from '../../wait-conditions-aysnc';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../../models/article-object';
import { ElementWrapper } from '../../wrappers/element-wrapper';

export class EditorPage {

    private articleTitle = new ElementWrapper(element(by.name('title')));
    private articleDescription = new ElementWrapper(element(by.name('description')));
    private articleContent =  new ElementWrapper(element(by.name('body')));
    private publishArticleButton = element(by.partialButtonText('Publish Article'));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('editor-page')));
    }

    addArticle(articleTitle: string, articleDescription: string, articleContent: string): ArticlePage {
        this.articleTitle.sendKeys(articleTitle);
        this.articleDescription.sendKeys(articleDescription);
        this.articleContent.sendKeys(articleContent);
        this.publishArticleButton.click();
        return new ArticlePage();
    }

    updateArticleContent(articleContent: string): EditorPage {
        this.articleContent.sendKeys(articleContent);
        return this;
    }

    publishArticle(): ArticlePage{
        this.publishArticleButton.click();
        return new ArticlePage();
    }
}
