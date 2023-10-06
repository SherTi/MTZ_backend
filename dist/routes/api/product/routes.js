"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
const controller = new controller_1.ProductController();
router.post("/create", controller.create);
exports.default = router;
