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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    singIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                if (!login || !password) {
                    res.status(200).json({
                        status: false,
                        message: "Нет необходимых данных!",
                        data: null,
                    });
                    return;
                }
                if (!login.trim() || !password.trim()) {
                    res.status(200).json({
                        status: false,
                        message: "Нет необходимых данных!",
                        data: null,
                    });
                    return;
                }
                if (login !== "root" || password !== "admin123") {
                    res.status(200).json({
                        status: false,
                        message: "Неверный логин или пароль!",
                        data: null,
                    });
                    return;
                }
                const date = new Date();
                date.setDate(date.getDate() + 2);
                const token = jsonwebtoken_1.default.sign({
                    name: "Main Admin",
                    date: new Date().getTime(),
                    expiresIn: date.getTime(),
                }, "850283e8-5b98-44ab-aebd-ef082a216d4a", { expiresIn: "2d" });
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: {
                        token,
                        time: new Date().getTime(),
                        expiresIn: date.getTime(),
                    },
                });
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Увы что то пошло не так!",
                    data: null,
                });
            }
        });
    }
}
exports.AuthController = AuthController;
