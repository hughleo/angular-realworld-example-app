import { browser, element, by } from 'protractor';
import { WaitConditionsAsync as WC } from '../wait-conditions-aysnc';
import { HomePage } from './home-page.po';
import { EditorPage } from './editor-page.po';
import { ArticleBuilder } from '../models/article-builder';

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

    async deleteArticle(): Promise<HomePage> {
        await this.deleteArticleButton.click();
        return new HomePage();
    }

    async editArticle(): Promise<EditorPage> {
        await this.editArticleButton.click();
        return new EditorPage();
    }

    async addComment(comment: string): Promise<ArticlePage> {
        await this.commentField.sendKeys(comment);
        await this.postComment.click();
        return this;
    }

    async getFirstComment() {
        return await this.comments.first().getText();
    }
    async getArticleContent() {
        return await this.articleContent.getText();
    }
}
