import { ProductRepository } from "../domain/ProductRepository";

export class GetProduct{
    constructor(private readonly productRepository: ProductRepository){}

    async get(userId:string){
        const productFind = await this.productRepository.getByUserId(userId);
        if(!productFind) throw new Error("User not found");
        return productFind;
    }   
}