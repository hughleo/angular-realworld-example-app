import { ArticleObject } from './article-object';

export class ArticleBuilder {

    private articleTitle: string;
    private articleDescription: string;
    private articleBody: string;

    constructor() {
        this.articleTitle = 'test article';
        this.articleDescription = 'desc';
        this.articleBody = 'body';
    }

    build(): ArticleObject {
        return new ArticleObject(this.articleTitle, this.articleDescription, this.articleBody);
    }
}
