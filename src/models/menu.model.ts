
export interface MenuItem {
  name: string;
  description?: string[];
  price: string;
  unit: string;
  imageUrl: string;
}

export interface MenuCategory {
  title: string;
  subtitle: string;
  items: MenuItem[];
}
