import { Request, Response } from "express";
import { CreateCategoryBody, ParamsDictionary } from "../../../types";
import { Category } from "../../../model";

export class CategoryController {
  async create(
    req: Request<ParamsDictionary, any, CreateCategoryBody>,
    res: Response,
  ) {
    try {
      const { type, name, image_id } = req.body;
      if (!type || !name) {
        res.status(200).json({
          status: false,
          message: "Запрос неправильно сформирован!",
          data: null,
        });
        return;
      }

      if (type !== "tractor" && type !== "spare") {
        res.status(200).json({
          status: false,
          message: "Запрос неправильно сформирован!",
          data: null,
        });
        return;
      }

      const created = await Category.create({
        name,
        image_id,
        tractor: type == "tractor",
      });
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: created,
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message:
          "Ошибка сервера, попробуйте позже или обратитес администратору!",
        data: false,
      });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: {
          tractor: categories.filter((value) => {
            return value.tractor;
          }),
          spare: categories.filter((value) => {
            return !value.tractor;
          }),
        },
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message:
          "Ошибка сервера, попробуйте позже или обратитес администратору!",
        data: false,
      });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message:
          "Ошибка сервера, попробуйте позже или обратитес администратору!",
        data: false,
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message:
          "Ошибка сервера, попробуйте позже или обратитес администратору!",
        data: false,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        message:
          "Ошибка сервера, попробуйте позже или обратитес администратору!",
        data: false,
      });
    }
  }
}
