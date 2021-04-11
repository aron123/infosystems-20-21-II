import { Category } from "./category";
import { User } from "./user";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    categories: Category[];
    uploader: User;
}
