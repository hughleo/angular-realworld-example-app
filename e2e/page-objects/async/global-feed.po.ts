import { element, by } from 'protractor';
import { EditorPage } from './editor-page.po';
import { ArticlePage } from './article-page.po';

export class GlobalFeed {

    private editArticleButton = element(by.partialLinkText('Edit Article'));
    private deleteArticleButton = element(by.partialButtonText('Delete Article'));
    private postComment = element(by.partialButtonText('Post Comment'));
    private comment = element(by.name('body'));
    private articleContent = element(by.css('div[class="row article-content"]'));

    async getArticle(title: string): Promise<ArticlePage> {
        element(by.xpath('//h2[.="' + title + '"]')).click();
        return await new ArticlePage();
    }

    async isArticleDisplayed(title: string) {
        return await element(by.xpath('//h2[.="' + title + '"]')).isPresent();
    }
}
