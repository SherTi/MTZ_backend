import { Request, Response } from "express";
import { CreateProductBody, ParamsDictionary } from "../../../types";

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
        motor,
        trans,
        equipment,
        chars,
        category_id,
      } = req.body;

      if (
        !type ||
        !name ||
        !main_chars ||
        !main_image ||
        !desc ||
        !equipment ||
        !category_id
      ) {
        res.status(200).json({
          status: false,
          message: "Запрос неправильно сформирован!",
          data: null,
        });
        return;
      }
      console.log(req.body);
      if (
        !Array.isArray(main_chars) ||
        (motor !== undefined && !Array.isArray(motor)) ||
        (trans !== undefined && !Array.isArray(trans)) ||
        equipment
      )
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
}
