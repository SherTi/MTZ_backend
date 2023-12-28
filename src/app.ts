import express, { Request, Response } from "express";
import cors from "cors";
import { create } from "express-handlebars";
import HBS from "handlebars";
import * as path from "path";
import fileUpload from "express-fileupload";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./db";
import "./model";
import router from "./routes/router";
import { getCategories } from "./utils/getCategories";
import { Category } from "./model";
import * as fs from "fs";
import { getRootDir } from "./utils/getRootDir";

class CompileCategory extends Category {
  declare sub_categories: CompileCategory[];
  declare src?: string | null;
}

const app = express();
dotenv.config();
app.enable("trust proxy");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "..", "/static/tmp"),
  }),
);

// function compileSubCategories(args: CompileCategory) {
//   // const template = HBS.compile(fs.readFileSync(path.resolve(getRootDir(), "views", "partials", "category_list.hbs"), 'utf8'));
//   // let str: string | null = null;
//   // if (args.sub_categories && args.sub_categories.length) {
//   //   str = '';
//   //   for (const s of args.sub_categories) {
//   //     str += compileSubCategories(s);
//   //   }
//   // }
//   // return template({...args, subCategories: str ? new HBS.SafeString(str) : null});
//   const template = HBS.compile(fs.readFileSync(path.resolve(getRootDir(), "views", "partials", "category_list.hbs"), 'utf8'));
//   return new HBS.SafeString(template(args));
// }

HBS.registerHelper("view_category", (args: CompileCategory, from: string) => {
  const template = HBS.compile(
    fs.readFileSync(
      path.resolve(getRootDir(), "views", "partials", "category_list.hbs"),
      "utf8",
    ),
  );
  // const result = template(args);
  // console.log(`From: ${from}`, 'Result: \n', result);
  // return result;
  return new HBS.SafeString(template(args));
  // return compileSubCategories(args);
});
HBS.registerHelper("json_log", (args: any) => {
  return new HBS.SafeString(JSON.stringify(args, undefined, 2));
});

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
  handlebars: HBS,
  layoutsDir: path.join(__dirname, "..", "views/layouts/"),
  partialsDir: [path.join(__dirname, "..", "views/partials")],
  // helpers: {
  //   if_eq: (a: any, b: string, options: any) => {
  //     if (a == b) {
  //       return options.fn(this);
  //     } else {
  //       return options.inverse(this);
  //     }
  //   },
  //   concat: (...strings: any) => {
  //     let con: string = "";
  //     for (let i = 0; i < strings.length; i++) {
  //       if (i != strings.length - 1) {
  //         con += `${strings[i]}`;
  //       }
  //     }
  //     return con;
  //   },
  //   includes: (a: string, b: string, options: any) => {
  //     if (a.includes(b)) {
  //       return options.fn(this);
  //     } else {
  //       return options.inverse(this);
  //     }
  //   },
  // },
});

app.engine("hbs", hbs.engine);
app.set("views", ["views", "views/pages"]);
app.set("view engine", "hbs");
app.disable("x-powered-by");
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "static")));
app.use(router);

app.use(async (req: Request, res: Response) => {
  try {
    if (req.headers.accept?.includes("html")) {
      res.status(404).render("404");
    } else {
      res.status(404).send();
    }
  } catch (e) {
    res.status(500).render("error");
  }
});
const start = () => {
  db.authenticate().then(() => {
    db.sync({ alter: { drop: false } }).then(() => {
      app.listen(
        (process.env.PORT as any) || 4300,
        process.env.HOST || "localhost",
        () => {
          console.log(
            `Сервер запустился на: http://${process.env.HOST}:${process.env.PORT}`,
          );
        },
      );
    });
  });
};

start();
