export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}