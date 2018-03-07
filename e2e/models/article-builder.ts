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

    build(): ArticleObject {
        return new ArticleObject(this.articleTitle, this.articleDescription, this.articleBody);
    }
}
