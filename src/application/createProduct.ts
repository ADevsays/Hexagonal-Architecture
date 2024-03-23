import { ProductRepository } from "../domain/ProductRepository";

export class CreateProduct{
    constructor(
        private readonly productRepository: ProductRepository
    ){}
    async create(userId:string){
        const newProduct = await this.productRepository.createByUser(userId);
        return newProduct;
    }
}