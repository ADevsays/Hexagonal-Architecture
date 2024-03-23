import { Product } from "./Product";

export interface ProductRepository{
    getByUserId: (userId:string)=> Promise<Product | null>,
    createByUser: (userId:string)=> Promise<Product>
}