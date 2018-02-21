export class ArticleObject {

    public ArticleTitle: string;
    public ArticleDescription: string;
    public ArticleBody: string;

    constructor(articleTitle: string, articleDescription: string, articleBody: string) {
        this.ArticleTitle = articleTitle;
        this.ArticleDescription = articleDescription;
        this.ArticleBody = articleBody;
    }

}
