import { categories } from '../data/categories';
import type { Category } from './../../types/Category';

export const categoryService = {
    getCategories(): Promise<Category[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(categories);
            }, 300);
        });
    }
};