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
exports.EmailSender = void 0;
class EmailSender {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    run(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("run user", userId);
            const user = yield this.userRepository.getById(userId);
            if (!user)
                throw new Error(`User id not found ${userId}`);
            console.log(user.email);
        });
    }
}
exports.EmailSender = EmailSender;
