import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class AuthController {
  async singIn(req: Request, res: Response) {
    try {
      const { login, password } = req.body;
      if (!login || !password) {
        res.status(200).json({
          status: false,
          message: "Нет необходимых данных!",
          data: null,
        });
        return;
      }

      if (!login.trim() || !password.trim()) {
        res.status(200).json({
          status: false,
          message: "Нет необходимых данных!",
          data: null,
        });
        return;
      }

      if (login !== "root" || password !== "admin123") {
        res.status(200).json({
          status: false,
          message: "Неверный логин или пароль!",
          data: null,
        });
        return;
      }
      const date = new Date();
      date.setDate(date.getDate() + 2);
      const token = jwt.sign(
        {
          name: "Main Admin",
          date: new Date().getTime(),
          expiresIn: date.getTime(),
        },
        "850283e8-5b98-44ab-aebd-ef082a216d4a",
        { expiresIn: "2d" },
      );

      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: {
          token,
          time: new Date().getTime(),
          expiresIn: date.getTime(),
        },
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
