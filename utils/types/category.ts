export interface Category {
  id: number;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  icon: string;
  category: Category;
}
