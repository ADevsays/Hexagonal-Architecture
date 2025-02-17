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
exports.UserController = void 0;
class UserController {
    constructor(getProductInstance, createProductInstance) {
        this.getProductInstance = getProductInstance;
        this.createProductInstance = createProductInstance;
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const product = yield this.getProductInstance.get(userId);
            res.status(200).json(product);
        });
    }
    ;
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const newProduct = yield this.createProductInstance.create(userId);
            console.log(newProduct);
            res.status(200).json(newProduct);
        });
    }
}
exports.UserController = UserController;
