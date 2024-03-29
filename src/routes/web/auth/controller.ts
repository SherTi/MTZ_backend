import { Request, Response } from "express";
import { Category, Gallery, Product, Settings } from "../../../model";

export class AuthController {
  async property_tractor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dbProduct = await Product.findOne({ where: { id } });
      if (!dbProduct) {
        res.redirect("/");
        return;
      }
      const cat = (await Category.findOne({
        where: { id: dbProduct.category_id },
        raw: true,
      }))!;
      const product = dbProduct.toJSON();
      (product as any).img = (await Gallery.findOne({
        where: { id: product.main_image },
      }))!.src;
      (product as any).is_tractor = cat.tractor;
      if (product.st_image && product.sd_image && product.th_image) {
        (product as any).st_img = (await Gallery.findOne({
          where: { id: product.st_image },
        }))!.src;
        (product as any).sd_img = (await Gallery.findOne({
          where: { id: product.sd_image },
        }))!.src;
        (product as any).th_img = (await Gallery.findOne({
          where: { id: product.th_image },
        }))!.src;
      }
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
      const settings = await Settings.findOne();
      const certs: any[] = [];
      if (settings) {
        for (const c of settings.certificates) {
          const img = await Gallery.findOne({ where: { id: c } });
          if (img) {
            certs.push(img.toJSON());
          }
        }
      }
      res.render("property_tractors", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        product: product,
        s: product.desc.split("\n").filter((val) => {
          return !!val.trim();
        }),
        category: cat,
        certs,
        info: req.info,
      });
    } catch (e) {}
  }
  async catalog_tractor(req: Request, res: Response) {
    try {
      const { id } = req.params;
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
      const category = await Category.findOne({ where: { id }, raw: true });
      if (!category) {
        res.redirect("/");
        return;
      }
      const products = await Product.findAll({
        where: { category_id: category.id },
      });
      (category as any).products = [];
      for (const product of products) {
        const json = product.toJSON();
        (json as any).img = (await Gallery.findOne({
          where: { id: json.main_image },
        }))!.src;
        (category as any).products.push(json);
      }
      // console.log(category);
      res.render("catalog_tractors_models", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        category,
        info: req.info,
      });
    } catch (e) {}
  }
  async catalog_parts(req: Request, res: Response) {
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
      res.render("catalog_spare_parts", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        info: req.info,
      });
    } catch (e) {}
  }
  async property_part(req: Request, res: Response) {
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
      res.render("property_parts", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        info: req.info,
      });
    } catch (e) {}
  }
  async about_company(req: Request, res: Response) {
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
      const settings = await Settings.findOne();
      const certs: any[] = [];
      let staff_main: Gallery | null = null;
      const staff_images: any = [];
      if (settings) {
        for (const c of settings.certificates) {
          const img = await Gallery.findOne({ where: { id: c } });
          if (img) {
            certs.push(img.toJSON());
          }
        }
        staff_main = await Gallery.findOne({
          where: { id: settings.staff_main },
          raw: true,
        });
        if (staff_main) {
          for (const c of settings.staff) {
            const img = await Gallery.findOne({ where: { id: c } });
            if (img) {
              staff_images.push(img.toJSON());
            }
          }
        }
      }
      res.render("about_us", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        certs,
        staff_images,
        staff_main,
        info: req.info,
      });
    } catch (e) {}
  }

  async contact(req: Request, res: Response) {
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
      res.render("contact", {
        styles: ["header.css", "style.css", "footer.css"],
        tractor_categories: categories.filter((value) => {
          return value.tractor;
        }),
        spare_categories: categories.filter((value) => {
          return !value.tractor;
        }),
        info: req.info,
      });
    } catch (e) {}
  }
  async privacy_policy(req: Request, res: Response) {
    try{

      res.render("privacy_policy", {
        styles: ["header.css", "style.css" , "footer.css"]
      });
    } catch (e) {

    }
  };
}
