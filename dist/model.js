"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Category = exports.Gallery = exports.Product = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class Product extends sequelize_1.Model {
}
exports.Product = Product;
class Gallery extends sequelize_1.Model {
}
exports.Gallery = Gallery;
class Category extends sequelize_1.Model {
}
exports.Category = Category;
class Settings extends sequelize_1.Model {
}
exports.Settings = Settings;
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    name: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    desc: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    main_chars: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("main_chars"));
        },
        set(value) {
            return this.setDataValue("main_chars", JSON.stringify(value));
        },
    },
    main_image: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    st_image: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    sd_image: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    th_image: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    chars: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("chars"));
        },
        set(value) {
            return this.setDataValue("chars", JSON.stringify(value));
        },
    },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, { tableName: "products", sequelize: db_1.default });
Gallery.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        get() {
            const strArr = this.getDataValue("src").split("/");
            return strArr[strArr.length - 1];
        },
    },
    height: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        get() {
            return parseInt(this.getDataValue("height"));
        },
    },
    width: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        get() {
            return parseInt(this.getDataValue("width"));
        },
    },
    size: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    src: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, { tableName: "gallery", sequelize: db_1.default });
Category.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    image_id: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    tractor: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, { tableName: "categories", sequelize: db_1.default });
Settings.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    phone_1: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    phone_2: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    telegram: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    facebook: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    instagram: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    certificates: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("certificates"));
        },
        set(value) {
            this.setDataValue("certificates", JSON.stringify(value));
        },
    },
    staff_main: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    staff: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("staff"));
        },
        set(value) {
            this.setDataValue("staff", JSON.stringify(value));
        },
    },
    recommended_categories: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("recommended_categories"));
        },
        set(value) {
            this.setDataValue("recommended_categories", JSON.stringify(value));
        },
    },
    partners: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("partners"));
        },
        set(value) {
            this.setDataValue("partners", JSON.stringify(value));
        },
    },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, { tableName: "settings", sequelize: db_1.default });
Category.hasMany(Product, {
    foreignKey: { name: "category_id", allowNull: false },
});
Product.belongsTo(Category, {
    foreignKey: { name: "category_id", allowNull: false },
});
