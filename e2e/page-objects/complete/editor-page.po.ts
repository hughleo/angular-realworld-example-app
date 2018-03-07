import { element, by } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../../models/article-object';
import { ElementWrapper } from '../../wrappers/element-wrapper';

export class EditorPage {

    private articleTitle = element(by.name('title'));
    private articleDescription = element(by.name('description'));
    private articleContent = element(by.name('body'));
    private publishArticleButton = element(by.partialButtonText('Publish Article'));
    
   

    constructor() {
        WC.waitForElementToDisplay(element(by.className('editor-page')));
    }

    articleTitleIsDisplayed() {
        return this.articleTitle.isPresent();
    }

    // addArticle(articleTitle: string, articleDescription: string, articleContent: string): ArticlePage {
    //     this.articleTitle.sendKeys(articleTitle);
    //     this.articleDescription.sendKeys(articleTitle);
    //     this.articleContent.sendKeys(articleTitle);
    //     return new ArticlePage();
    // }

    addArticle(articleObject: ArticleObject): ArticlePage {
        this.articleTitle.sendKeys(articleObject.ArticleTitle);
        this.articleDescription.sendKeys(articleObject.ArticleDescription);
        this.articleContent.sendKeys(articleObject.ArticleBody);
        this.publishArticleButton.click();
        return new ArticlePage();
    }

    updateArticleContent(articleContent: string): EditorPage {
        this.articleContent.sendKeys(articleContent);
        return this;
    }

    publishArticle(): ArticlePage {
        this.publishArticleButton.click();
        return new ArticlePage();
    }

    
}
