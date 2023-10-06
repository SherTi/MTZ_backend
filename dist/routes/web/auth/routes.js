"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const model_1 = require("../../../model");
const router = (0, express_1.Router)();
const controller = new controller_1.AuthController();
router.use((req, res, next) => {
    model_1.Settings.findOne().then((val) => {
        if (val) {
            req.info = val.toJSON();
        }
        next();
    });
});
router.get("/property_tractors/:id", controller.property_tractor);
router.get("/catalog_tractors_models/:id", controller.catalog_tractor);
router.get("/catalog_spare_parts", controller.catalog_parts);
router.get("/property_parts", controller.property_part);
router.get("/about_us", controller.about_company);
router.get("/contact", controller.contact);
exports.default = router;
