"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductDB = void 0;
const productsMock = [
    { id: "12", userId: "1", price: 12, quantity: 1, title: "Manzana" },
    { id: "14", userId: "2", price: 14, quantity: 2, title: "Carrito" },
    { id: "18", userId: "1", price: 15, quantity: 3, title: "Espejo" },
];
class GetProductDB {
    getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId, "asff");
            const product = productsMock.find(product => product.userId == userId);
            console.log("El producto del usuario es", product);
            if (!product)
                return null;
            return product;
        });
    }
}
exports.GetProductDB = GetProductDB;
