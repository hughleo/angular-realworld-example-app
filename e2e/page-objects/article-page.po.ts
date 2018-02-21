import { browser, element, by } from 'protractor';
import { WaitConditions } from '../wait-conditions';
import { HomePage } from './home-page.po';
import { EditorPage } from './editor-page.po';
import { ArticleBuilder } from '../models/article-builder';

export class ArticlePage {

    private editArticleButton = element(by.partialLinkText('Edit Article'));
    private deleteArticleButton = element(by.partialButtonText('Delete Article'));
    private postComment = element(by.partialButtonText('Post Comment'));
    private comment = element(by.name('body'));
    private articleContent = element(by.css('div[class="row article-content"]'));

    constructor() {
        WaitConditions.waitForElementToDisplay(element(by.className('article-page')));
    }

    deleteArticle(): HomePage {
        this.deleteArticleButton.click();
        return new HomePage();
    }

    editArticle(): EditorPage {
        this.editArticleButton.click();
        return new EditorPage();
    }

    addComment(comment: string): ArticlePage {
        this.comment.sendKeys(comment);
        this.postComment.click();
        return this;
    }

    getArticleContent() {
        return this.articleContent.getText();
    }
}
