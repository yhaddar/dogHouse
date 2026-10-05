export interface pages {
    page: string;
    path: string;
}

export interface headerProps {
    title: string;
    subtitle: string;
    href: string;
}

export enum types {
    PRODUCT = "product",
    CATEGORY = "category"
}