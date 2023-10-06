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
exports.ProductController = void 0;
const model_1 = require("../../../model");
function checkImages(image1, image2, image3) {
    return !!(image1 && image2 && image3);
}
class ProductController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, name, main_chars, main_image, st_image, sd_image, th_image, desc, chars, category_id, } = req.body;
                if (!type ||
                    !name ||
                    !main_chars ||
                    !main_image ||
                    !desc ||
                    !category_id) {
                    res.status(200).json({
                        status: false,
                        message: "Запрос неправильно сформирован!",
                        data: null,
                    });
                    return;
                }
                const created = yield model_1.Product.create({
                    name,
                    desc,
                    main_chars,
                    main_image,
                    st_image: checkImages(st_image, sd_image, th_image)
                        ? st_image
                        : undefined,
                    sd_image: checkImages(st_image, sd_image, th_image)
                        ? sd_image
                        : undefined,
                    th_image: checkImages(st_image, sd_image, th_image)
                        ? th_image
                        : undefined,
                    chars,
                    category_id,
                });
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: null,
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
exports.ProductController = ProductController;
