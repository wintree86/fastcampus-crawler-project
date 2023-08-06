export interface Article {
    editor: string;
    title: string;
    keyword?: string;
    description?: string;
    mainImageUrl?: string;
    avatarImageUrl?: string;
    link: string;
}

export interface Keyword {
    keyword: string;
}