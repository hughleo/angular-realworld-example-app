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

    async deleteArticle(): Promise<HomePage> {
        await this.deleteArticleButton.click();
        return new HomePage();
    }

    async editArticle(): Promise<EditorPage> {
        await this.editArticleButton.click();
        return new EditorPage();
    }

    async addComment(comment: string): Promise<ArticlePage> {
        await this.comment.sendKeys(comment);
        await this.postComment.click();
        return this;
    }

    async getArticleContent() {
        return this.articleContent.getText();
    }
}
