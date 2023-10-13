import { Request, Response } from "express";
import { Applications, Product } from "../../../model";

export class ApplicationController {
  async get(req: Request, res: Response) {
    try {
      const applications = await Applications.findAll();
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: applications,
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
