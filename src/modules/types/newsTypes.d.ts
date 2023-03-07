declare module namespace {

    export interface Category {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        revisedAt: Date;
        name: string;
    }

    export interface NewsTypes {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        revisedAt: Date;
        title: string;
        content: string;
        category: Category;
    }

}
