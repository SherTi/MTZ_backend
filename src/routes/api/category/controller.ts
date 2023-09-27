import { Request, Response } from "express";

export class CategoryController {
  async create(req: Request, res: Response) {
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
  async getAll(req: Request, res: Response) {
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
