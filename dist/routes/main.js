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
exports.MainController = void 0;
const model_1 = require("../model");
class MainController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield model_1.Category.findAll({ raw: true });
                for (const category of categories) {
                    if (category.image_id) {
                        const image = yield model_1.Gallery.findOne({
                            where: { id: category.image_id },
                        });
                        if (image) {
                            category.src = image.src;
                        }
                    }
                }
                const settings = yield model_1.Settings.findOne();
                const cats = [];
                const parts = [];
                if (settings) {
                    for (const c of settings.recommended_categories) {
                        const img = yield model_1.Gallery.findOne({ where: { id: c.image } });
                        if (img) {
                            cats.push(Object.assign(Object.assign({}, c), { src: img.src }));
                        }
                    }
                    for (const p of settings.partners) {
                        const img = yield model_1.Gallery.findOne({ where: { id: p } });
                        if (img) {
                            parts.push(img.src);
                        }
                    }
                }
                res.render("index", {
                    styles: ["header.css", "style.css", "footer.css"],
                    main: true,
                    banner: true,
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    cats,
                    parts,
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
}
exports.MainController = MainController;
