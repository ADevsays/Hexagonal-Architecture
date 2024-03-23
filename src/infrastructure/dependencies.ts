import { CreateProduct } from "../application/createProduct";
import { GetProduct } from "../application/getProduct";
import { ProductDB } from "./productDB";
import { UserController } from "./userController";

const productDB = new ProductDB();
const getProduct = new GetProduct(productDB);
const createProduct = new CreateProduct(productDB);
export const userController = new UserController(getProduct, createProduct);