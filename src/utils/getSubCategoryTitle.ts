import { categories } from "@/mocks/data/categories";

export const getSubCategoryTitle = (categoryHref: string, subCategoryHref: string): string => {
  const category = categories.find(cat => cat.href === categoryHref);
  if (category && category.submenu) {
    const subCategory = category.submenu.find(sub => sub.href === subCategoryHref);
    return subCategory ? subCategory.title : subCategoryHref;
  }
  return subCategoryHref;
};