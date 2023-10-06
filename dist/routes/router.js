"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("./main");
const routes_1 = __importDefault(require("./web/auth/routes"));
const router_1 = __importDefault(require("./web/posts/router"));
const routes_2 = __importDefault(require("./api/routes"));
const model_1 = require("../model");
const router = (0, express_1.Router)();
const mainController = new main_1.MainController();
router.get("/", (req, res, next) => {
    model_1.Settings.findOne().then((val) => {
        if (val) {
            req.info = val.toJSON();
        }
        next();
    });
}, mainController.get);
router.use(routes_1.default);
router.use("/posts", router_1.default);
router.use("/api", routes_2.default);
exports.default = router;
