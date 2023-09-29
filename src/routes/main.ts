import { Request, Response } from "express";
import { Category, Gallery } from "../model";

export class MainController {
  async get(req: Request, res: Response) {
    try {
      const categories = await Category.findAll({ raw: true });
      for (const category of categories) {
        if (category.image_id) {
          const image = await Gallery.findOne({
            where: { id: category.image_id },
          });
          if (image) {
            (category as any).src = image.src;
          }
        }
      }
      res.render("index", {
        styles: ["header.css", "style.css", "footer.css"],
        main: true,
        banner: true,
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
      });
    } catch (e) {}
  }
}
