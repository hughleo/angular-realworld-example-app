import { ArticleObject } from './article-object';


export class ArticleBuilder {

    private articleTitle: string;
    private articleDescription: string;
    private articleBody: string;

    constructor() {
        this.articleTitle = 'test article' + Math.floor(Math.random() * 1000) + 1 ;
        this.articleDescription = 'test article description';
        this.articleBody = 'article body';
    }

    build(): ArticleObject {
        return new ArticleObject(this.articleTitle, this.articleDescription, this.articleBody);
    }
}
