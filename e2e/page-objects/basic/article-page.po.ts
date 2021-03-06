import { element, by } from 'protractor';
import { WaitConditions as WC } from '../../wait-conditions';
import { HomePage } from './home-page.po';
import { EditorPage } from './editor-page.po';

export class ArticlePage {

    private editArticleButton = element(by.partialLinkText('Edit Article'));
    private deleteArticleButton = element(by.partialButtonText('Delete Article'));
    private postComment = element(by.partialButtonText('Post Comment'));
    private commentField = element(by.name('comment'));
    private articleContent = element(by.css('div[class="row article-content"]'));
    private comments = element.all(by.css('app-article-comment p[class="card-text"]'));

    constructor() {
        WC.waitForElementToDisplay(element(by.className('article-page')));
    }

    deleteArticle(): HomePage {
        this.deleteArticleButton.click();
        return new HomePage();
    }

    editArticle(): EditorPage {
        this.editArticleButton.click();
        return new EditorPage();
    }

    getArticleContent() {
        return this.articleContent.getText();
    }

    addComment(comment: string): ArticlePage {
        this.commentField.sendKeys(comment);
        this.postComment.click();
        return this;
    }

    getFirstComment() {
        return this.comments.first().getText();
    }

}
