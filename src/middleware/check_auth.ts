import {NextFunction, Request, RequestHandler, Response} from "express";
import jwt from "jsonwebtoken";

export function checkAuth(controller?: boolean): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        res.status(401).json({
          status: false,
          message: "Вы не авторизованы!",
          data: null,
        });
        return;
      }
      const split = authorization.split(" ");
      if (!split[0] || !split[1]) {
        res.status(401).json({
          status: false,
          message: "Вы не авторизованы!",
          data: null,
        });
        return;
      }
      if (split[0] !== 'Bearer') {
        res.status(401).json({
          status: false,
          message: "Вы не авторизованы!",
          data: null,
        });
        return;
      }
      const decoded = jwt.verify(split[1], '850283e8-5b98-44ab-aebd-ef082a216d4a');
      if (!decoded) {
        res.status(401).json({
          status: false,
          message: "Вы не авторизованы!",
          data: null,
        });
        return;
      }
      if (!controller) {
        next();
      } else {
        res.status(200).json({
          status: true,
          message: "Успешно!",
          data: null,
        });
      }

    } catch (e) {
      console.log(e);
      res.status(401).json({
        status: false,
        message: "Вы не авторизованы!",
        data: null,
      });
      return;
    }
  }
}