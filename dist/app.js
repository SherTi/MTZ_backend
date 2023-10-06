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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_handlebars_1 = require("express-handlebars");
const path = __importStar(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const dotenv = __importStar(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("./db"));
require("./model");
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
dotenv.config();
app.enable("trust proxy");
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "..", "/static/tmp"),
}));
const hbs = (0, express_handlebars_1.create)({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: path.join(__dirname, "..", "views/layouts/"),
    partialsDir: [path.join(__dirname, "..", "views/partials")],
    helpers: {
        if_eq: (a, b, options) => {
            if (a == b) {
                return options.fn(this);
            }
            else {
                return options.inverse(this);
            }
        },
        concat: (...strings) => {
            let con = "";
            for (let i = 0; i < strings.length; i++) {
                if (i != strings.length - 1) {
                    con += `${strings[i]}`;
                }
            }
            return con;
        },
        includes: (a, b, options) => {
            if (a.includes(b)) {
                return options.fn(this);
            }
            else {
                return options.inverse(this);
            }
        },
    },
});
app.engine("hbs", hbs.engine);
app.set("views", ["views", "views/pages"]);
app.set("view engine", "hbs");
app.disable("x-powered-by");
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path.join(__dirname, "..", "static")));
app.use(router_1.default);
app.use((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.headers.accept) === null || _a === void 0 ? void 0 : _a.includes("html")) {
            res.status(404).render("404");
        }
        else {
            res.status(404).send();
        }
    }
    catch (e) {
        res.status(500).render("error");
    }
}));
const start = () => {
    db_1.default.authenticate().then(() => {
        db_1.default.sync().then(() => {
            app.listen(process.env.PORT || 4300, process.env.HOST || "localhost", () => {
                console.log(`Сервер запустился на: http://${process.env.HOST}:${process.env.PORT}`);
            });
        });
    });
};
start();
