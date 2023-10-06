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
exports.AuthController = void 0;
const model_1 = require("../../../model");
class AuthController {
    property_tractor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const dbProduct = yield model_1.Product.findOne({ where: { id } });
                if (!dbProduct) {
                    res.redirect("/");
                    return;
                }
                const cat = (yield model_1.Category.findOne({
                    where: { id: dbProduct.category_id },
                    raw: true,
                }));
                const product = dbProduct.toJSON();
                product.img = (yield model_1.Gallery.findOne({
                    where: { id: product.main_image },
                })).src;
                product.is_tractor = cat.tractor;
                if (product.st_image && product.sd_image && product.th_image) {
                    product.st_img = (yield model_1.Gallery.findOne({
                        where: { id: product.st_image },
                    })).src;
                    product.sd_img = (yield model_1.Gallery.findOne({
                        where: { id: product.sd_image },
                    })).src;
                    product.th_img = (yield model_1.Gallery.findOne({
                        where: { id: product.th_image },
                    })).src;
                }
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
                const certs = [];
                if (settings) {
                    for (const c of settings.certificates) {
                        const img = yield model_1.Gallery.findOne({ where: { id: c } });
                        if (img) {
                            certs.push(img.toJSON());
                        }
                    }
                }
                res.render("property_tractors", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    product: product,
                    s: product.desc.split("\n").filter((val) => {
                        return !!val.trim();
                    }),
                    category: cat,
                    certs,
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
    catalog_tractor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
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
                const category = yield model_1.Category.findOne({ where: { id }, raw: true });
                if (!category) {
                    res.redirect("/");
                    return;
                }
                const products = yield model_1.Product.findAll({
                    where: { category_id: category.id },
                });
                category.products = [];
                for (const product of products) {
                    const json = product.toJSON();
                    json.img = (yield model_1.Gallery.findOne({
                        where: { id: json.main_image },
                    })).src;
                    category.products.push(json);
                }
                // console.log(category);
                res.render("catalog_tractors_models", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    category,
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
    catalog_parts(req, res) {
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
                res.render("catalog_spare_parts", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
    property_part(req, res) {
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
                res.render("property_parts", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
    about_company(req, res) {
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
                const certs = [];
                let staff_main = null;
                const staff_images = [];
                if (settings) {
                    for (const c of settings.certificates) {
                        const img = yield model_1.Gallery.findOne({ where: { id: c } });
                        if (img) {
                            certs.push(img.toJSON());
                        }
                    }
                    staff_main = yield model_1.Gallery.findOne({
                        where: { id: settings.staff_main },
                        raw: true,
                    });
                    if (staff_main) {
                        for (const c of settings.staff) {
                            const img = yield model_1.Gallery.findOne({ where: { id: c } });
                            if (img) {
                                staff_images.push(img.toJSON());
                            }
                        }
                    }
                }
                res.render("about_us", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    certs,
                    staff_images,
                    staff_main,
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
    contact(req, res) {
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
                res.render("contact", {
                    styles: ["header.css", "style.css", "footer.css"],
                    tractor_categories: categories.filter((value) => {
                        return value.tractor;
                    }),
                    spare_categories: categories.filter((value) => {
                        return !value.tractor;
                    }),
                    info: req.info,
                });
            }
            catch (e) { }
        });
    }
}
exports.AuthController = AuthController;
