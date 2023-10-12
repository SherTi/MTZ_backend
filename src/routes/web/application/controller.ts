import { Request, Response } from "express";
import { Applications } from "../../../model";

export class ApplicationController {
  async createApplication(req: Request, res: Response) {
    try {
      const { name, number, email, redirect, product_name } = req.body;
      if (!name || !number || !email) {
        res.redirect(redirect);
        return;
      }
      await Applications.create({
        name,
        phone: number,
        mail: email,
        product: product_name,
      });
      res.redirect(redirect);
    } catch (e) {}
  }
}
