"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, "850283e8-5b98-44ab-aebd-ef082a216d4a");
    }
    catch (_) {
        return null;
    }
}
function checkAuth(controller) {
    return (req, res, next) => {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                res.status(200).json({
                    status: false,
                    message: "Вы не авторизованы!",
                    data: null,
                });
                return;
            }
            const split = authorization.split(" ");
            if (!split[0] || !split[1]) {
                res.status(200).json({
                    status: false,
                    message: "Вы не авторизованы!",
                    data: null,
                });
                return;
            }
            if (split[0] !== "Bearer") {
                res.status(200).json({
                    status: false,
                    message: "Вы не авторизованы!",
                    data: null,
                });
                return;
            }
            const decoded = checkToken(split[1]);
            if (!decoded) {
                res.status(200).json({
                    status: false,
                    message: "Вы не авторизованы!",
                    data: null,
                });
                return;
            }
            if (!controller) {
                next();
            }
            else {
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: null,
                });
            }
        }
        catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                message: "Вы не авторизованы!",
                data: null,
            });
            return;
        }
    };
}
exports.checkAuth = checkAuth;
