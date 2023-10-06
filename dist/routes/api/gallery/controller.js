"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.GalleryController = void 0;
const path = __importStar(require("path"));
const model_1 = require("../../../model");
const getRootDir_1 = require("../../../utils/getRootDir");
class GalleryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { sizes } = req.body;
                if (!req.files || !sizes || !sizes.trim()) {
                    res.status(200).json({
                        status: false,
                        message: "Неправильно формированный запрос!",
                        data: null,
                    });
                    return;
                }
                const images = req.files.images;
                if (!images) {
                    res.status(200).json({
                        status: false,
                        message: "Неправильно формированный запрос!",
                        data: null,
                    });
                    return;
                }
                sizes = JSON.parse(sizes);
                const createdResult = [];
                if (Array.isArray(images)) {
                    for (let i = 0; i < images.length; i++) {
                        const size = sizes[i];
                        const image = images[i];
                        const name = `IMG-${new Date().getTime()}${path.extname(image.name)}`;
                        yield image.mv(path.join((0, getRootDir_1.getRootDir)(), `/static/uploaded/${name}`));
                        const created = yield model_1.Gallery.create({
                            size: image.size / 1000 / 1000 < 1
                                ? `${(image.size / 1000).toFixed(1)}KB`
                                : `${(image.size / 1000 / 1000).toFixed(1)}MB`,
                            height: size.height,
                            width: size.width,
                            src: `/uploaded/${name}`,
                        });
                        createdResult.push(created);
                    }
                }
                else {
                    const size = sizes[0];
                    const name = `IMG-${new Date().getTime()}${path.extname(images.name)}`;
                    yield images.mv(path.join((0, getRootDir_1.getRootDir)(), `/static/uploaded/${name}`));
                    const created = yield model_1.Gallery.create({
                        size: images.size / 1000 / 1000 < 1
                            ? `${(images.size / 1000).toFixed(1)}KB`
                            : `${(images.size / 1000 / 1000).toFixed(1)}MB`,
                        height: size.height,
                        width: size.width,
                        src: `/uploaded/${name}`,
                    });
                    createdResult.push(created);
                }
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: createdResult,
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
                const images = yield model_1.Gallery.findAll();
                res.status(200).json({
                    status: true,
                    message: "Успешно!",
                    data: images,
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
exports.GalleryController = GalleryController;
