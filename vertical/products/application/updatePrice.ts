import { ProductRepository } from "../domain/ProductRepository";

export class UpdatePrice{
    constructor(
        private readonly productRespository: ProductRepository
    ){}
    update(price:number){
        const newPrice = this.productRespository.updatePrice(price);
        return newPrice;
    }
}