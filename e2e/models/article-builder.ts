import { ArticleObject } from './article-object';


export class ArticleBuilder {

    private articleTitle: string;
    private articleDescription: string;
    private articleBody: string;

    constructor() {
        const faker = require('faker');
        this.articleTitle = faker.lorem.sentence();
        this.articleDescription = faker.lorem.sentence();
        this.articleBody = faker.lorem.paragraph();
    }

    withArticleTitle(articleTitle: string): ArticleBuilder {
        this.articleTitle = articleTitle;
        return this;
    }

    withArticleDescription(articleDescription: string): ArticleBuilder {
        this.articleDescription = articleDescription;
        return this;
    }

    withArticleBody(articleBody: string): ArticleBuilder {
        this.articleBody = articleBody;
        return this;
    }
    
    build(): ArticleObject {
        return new ArticleObject(this.articleTitle, this.articleDescription, this.articleBody);
    }
}
