import { Request, Response } from "express-serve-static-core";
import { GetProduct } from "../application/getProduct";
import { CreateProduct } from "../application/createProduct";

export class UserController{
    constructor(
            private readonly getProductInstance: GetProduct,
            private readonly createProductInstance: CreateProduct){}
            
    async getProduct(req: Request, res: Response){
        const userId = req.params?.id;
        const product = await this.getProductInstance.get(userId);
        res.status(200).json(product);
    };

    async createProduct(req: Request, res:Response){
        const userId = req.params?.id;
        const newProduct = await this.createProductInstance.create(userId);
        console.log(newProduct)
        res.status(200).json(newProduct)
    }
}