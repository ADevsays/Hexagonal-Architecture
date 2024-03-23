import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

const productsMock: Product[] = [];

export class ProductDB implements ProductRepository{
    async getByUserId(userId:string){
        const product = productsMock.find(product=> product.userId == userId);
        console.log("El producto del usuario es", product)
        if(!product) return null;
        return product;
    };

    async createByUser(userId:string){
        const product:Product = {
            title: "Manzana",
            id: "2",
            userId,
            price: 12,
            quantity: 1
        }
        productsMock.push(product);
        return product;
    }
}