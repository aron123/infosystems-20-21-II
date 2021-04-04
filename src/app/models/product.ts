import { Category } from "./category";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    categories: Category[];
}
