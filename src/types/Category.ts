export interface Category {
    id: number;
    title: string;
    href: string;
    submenu?: Array<{
        title: string;
        href: string;
    }>;
}