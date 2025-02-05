import type { Category } from "@/types//Category";

export type CategoryContentType = 'video' | 'news' | 'results' | 'table';

export interface CategorySectionProps {
    category: Category;
    contentType?: CategoryContentType;
    layout?: 'default' | 'featured' | 'compact';
}