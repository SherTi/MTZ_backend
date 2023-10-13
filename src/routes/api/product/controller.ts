import { Request, Response } from "express";
import { CreateProductBody, ParamsDictionary } from "../../../types";
import { Product } from "../../../model";

function checkImages(image1?: string, image2?: string, image3?: string) {
  return !!(image1 && image2 && image3);
}

export class ProductController {
  async create(
    req: Request<ParamsDictionary, any, CreateProductBody>,
    res: Response,
  ): Promise<void> {
    try {
      const {
        type,
        name,
        main_chars,
        main_image,
        st_image,
        sd_image,
        th_image,
        desc,
        chars,
        category_id,
      } = req.body;

      if (
        !type ||
        !name ||
        !main_chars ||
        !main_image ||
        !desc ||
        !category_id
      ) {
        res.status(200).json({
          status: false,
          message: "Запрос неправильно сформирован!",
          data: null,
        });
        return;
      }
      const created = await Product.create({
        name,
        desc,
        main_chars,
        main_image,
        st_image: checkImages(st_image, sd_image, th_image)
          ? st_image
          : undefined,
        sd_image: checkImages(st_image, sd_image, th_image)
          ? sd_image
          : undefined,
        th_image: checkImages(st_image, sd_image, th_image)
          ? th_image
          : undefined,
        chars,
        category_id,
      });
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: null,
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message: "Увы что то пошло не так!",
        data: null,
      });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const products = await Product.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: products,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        message: "Увы что то пошло не так!",
        data: null,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.body;
      if (!id) {
        res.status(200).json({
          status: false,
          message: "Нет необходимых параметров!",
          data: null,
        });
        return;
      }
      await Product.destroy({
        where: { id },
      });
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: null,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        message: "Увы что то пошло не так!",
        data: null,
      });
    }
  }
  async toPopular(req: Request, res: Response) {
    try {
      const { id } = req.body;
      if (!id) {
        res.status(200).json({
          status: false,
          message: "Нет необходимых параметров!",
          data: null,
        });
        return;
      }
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        res.status(200).json({
          status: false,
          message: "Нет необходимых параметров!",
          data: null,
        });
        return;
      }
      await product.update({
        isRecommended: !product.isRecommended,
      });
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: product.isRecommended,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        message: "Увы что то пошло не так!",
        data: null,
      });
    }
  }
}
