import {Request, Response} from "express";

export class ProductController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { } = req.body;
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: null
      });
    } catch (e) {

    }
  }
}