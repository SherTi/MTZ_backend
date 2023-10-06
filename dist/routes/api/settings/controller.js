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
exports.SettingsController = void 0;
const model_1 = require("../../../model");
class SettingsController {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phone_1, phone_2, telegram, facebook, instagram, certificates, staff, partners, image_1, image_2, image_3, cat_1, cat_2, cat_3, } = req.body;
                if (!phone_1 ||
                    !phone_2 ||
                    !telegram ||
                    !facebook ||
                    !instagram ||
                    !certificates ||
                    !staff ||
                    !partners ||
                    !image_1 ||
                    !image_2 ||
                    !image_3 ||
                    !cat_1 ||
                    !cat_2 ||
                    !cat_3) {
                    res.status(200).json({
                        status: false,
                        message: "Запрос сформирован неправильно!",
                        data: null,
                    });
                    return;
                }
                const category_1 = yield model_1.Category.findOne({ where: { id: cat_1 } });
                const category_2 = yield model_1.Category.findOne({ where: { id: cat_2 } });
                const category_3 = yield model_1.Category.findOne({ where: { id: cat_3 } });
                if (!category_1 || !category_2 || !category_3) {
                    res.status(200).json({
                        status: false,
                        message: "Неправильные данные!",
                        data: null,
                    });
                    return;
                }
                if (staff.length > 4 || staff.length < 1) {
                    res.status(200).json({
                        status: false,
                        message: "Неправильные данные!",
                        data: null,
                    });
                    return;
                }
                const staffToCreate = [];
                for (let i = 1; i < staff.length; i++) {
                    const st = staff[i];
                    if (st) {
                        staffToCreate.push(st);
                    }
                }
                const recommended_categories = [
                    {
                        id: category_1.id,
                        name: category_1.name,
                        image: image_1,
                    },
                    {
                        id: category_2.id,
                        name: category_2.name,
                        image: image_2,
                    },
                    {
                        id: category_3.id,
                        name: category_3.name,
                        image: image_3,
                    },
                ];
                let settings = yield model_1.Settings.findOne();
                if (!settings) {
                    settings = yield model_1.Settings.create({
                        phone_1,
                        phone_2,
                        telegram,
                        facebook,
                        instagram,
                        certificates,
                        staff_main: staff[0],
                        staff: staffToCreate,
                        partners,
                        recommended_categories,
                    });
                }
                else {
                    yield settings.update({
                        phone_1,
                        phone_2,
                        telegram,
                        facebook,
                        instagram,
                        certificates,
                        staff_main: staff[0],
                        staff: staffToCreate,
                        partners,
                        recommended_categories,
                    });
                }
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: settings,
                });
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: null,
                });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const settings = yield model_1.Settings.findOne();
                if (!settings) {
                    res.status(200).json({
                        status: false,
                        message: "Ничего не найдено!",
                        data: null,
                    });
                    return;
                }
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: settings,
                });
            }
            catch (e) {
                console.log(e);
                res.status(200).json({
                    status: false,
                    message: "Ошибка сервера, попробуйте позже или обратитес администратору!",
                    data: null,
                });
            }
        });
    }
}
exports.SettingsController = SettingsController;
