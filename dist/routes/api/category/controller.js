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
exports.CategoryController = void 0;
const model_1 = require("../../../model");
class CategoryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, name, image_id } = req.body;
                if (!type || !name) {
                    res.status(200).json({
                        status: false,
                        message: "Запрос неправильно сформирован!",
                        data: null,
                    });
                    return;
                }
                if (type !== "tractor" && type !== "spare") {
                    res.status(200).json({
                        status: false,
                        message: "Запрос неправильно сформирован!",
                        data: null,
                    });
                    return;
                }
                const created = yield model_1.Category.create({
                    name,
                    image_id,
                    tractor: type == "tractor",
                });
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: created,
                });
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: false,
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield model_1.Category.findAll();
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: {
                        tractor: categories.filter((value) => {
                            return value.tractor;
                        }),
                        spare: categories.filter((value) => {
                            return !value.tractor;
                        }),
                    },
                });
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: false,
                });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: false,
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: false,
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: false,
                });
            }
        });
    }
}
exports.CategoryController = CategoryController;
