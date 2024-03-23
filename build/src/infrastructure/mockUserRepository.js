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
exports.MockUserRepository = void 0;
const User_1 = require("../domain/User");
const users = [
    {
        id: "1",
        email: "adevsaysoficial@gmail.com"
    },
    {
        id: "2",
        email: "otro@gmail.com"
    },
    {
        id: "1",
        email: "alberto@gmail.com"
    },
];
class MockUserRepository {
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFind = users.find(user => user.id === userId);
            if (!userFind)
                return null;
            const { id, email } = userFind;
            return new User_1.User(id, email);
        });
    }
}
exports.MockUserRepository = MockUserRepository;
