import { element, by } from 'protractor';
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

    addArticle(article: ArticleObject): ArticlePage {
        this.articleTitle.sendKeys(article.ArticleTitle);
        this.articleDescription.sendKeys(article.ArticleDescription);
        this.articleContent.sendKeys(article.ArticleBody);
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
