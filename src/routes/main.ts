import { Request, Response } from "express";
import { Category, Gallery, Product, Settings } from "../model";
import {getCategories} from "../utils/getCategories";

export class MainController {
  async get(req: Request, res: Response) {
    try {
      const settings = await Settings.findOne();
      const cats: any[] = [];
      const parts: string[] = [];
      if (settings) {
        for (const c of settings.recommended_categories) {
          const img = await Gallery.findOne({ where: { id: c.image } });
          if (img) {
            cats.push({
              ...c,
              src: img.src,
            });
          }
        }
        for (const p of settings.partners) {
          const img = await Gallery.findOne({ where: { id: p } });
          if (img) {
            parts.push(img.src);
          }
        }
      }
      const recommended = await Product.findAll({
        where: { isRecommended: true },
      });
      const rResult: any[] = [];
      for (const r of recommended) {
        const re = r.toJSON();
        (re as any).img = await Gallery.findOne({
          where: { id: r.main_image },
          raw: true,
        });
        rResult.push(re);
      }

      // console.log(rResult[0]);
      const c = await getCategories();
      // console.log(JSON.stringify(c, undefined, 2));
      res.render("index", {
        styles: ["header.css", "style.css", "footer.css"],
        main: true,
        banner: true,
        tractor_categories: c.filter((value) => {
          return !!value.tractor;
        }),
        spare_categories: c.filter((value) => {
          return !(!!value.tractor);
        }),
        cats,
        parts,
        info: req.info,
        recommended: rResult,
      });
    } catch (e) {}
  }
}
