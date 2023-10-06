"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
const controller = new controller_1.PostsController();
router.get("/get", controller.get);
exports.default = router;
