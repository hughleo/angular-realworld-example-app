import { element, by } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';
import { ArticlePage } from './article-page.po';
import { ArticleObject } from '../../models/article-object';

export class EditorPage {

    private articleTitle = element(by.name('title'));
    
    constructor() {
        WC.waitForElementToDisplay(element(by.className('editor-page')));
    }

    articleTitleIsDisplayed() {
        return this.articleTitle.isPresent();
    }

}
