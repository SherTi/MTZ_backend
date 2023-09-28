import { Request, Response } from "express";
import * as path from "path";
import { Gallery } from "../../../model";
import { getRootDir } from "../../../utils/getRootDir";

export class GalleryController {
  async create(req: Request, res: Response) {
    try {
      let { sizes } = req.body;
      if (!req.files || !sizes || !sizes.trim()) {
        res.status(200).json({
          status: false,
          message: "Неправильно формированный запрос!",
          data: null,
        });
        return;
      }
      const images = req.files.images;
      if (!images) {
        res.status(200).json({
          status: false,
          message: "Неправильно формированный запрос!",
          data: null,
        });
        return;
      }
      sizes = JSON.parse(sizes);
      const createdResult = [];
      if (Array.isArray(images)) {
        for (let i = 0; i < images.length; i++) {
          const size: { width: number; height: number } = sizes[i];
          const image = images[i];
          const name = `IMG-${new Date().getTime()}${path.extname(image.name)}`;
          await image.mv(path.join(getRootDir(), `/static/uploaded/${name}`));
          const created = await Gallery.create({
            size:
              image.size / 1000 / 1000 < 1
                ? `${(image.size / 1000).toFixed(1)}KB`
                : `${(image.size / 1000 / 1000).toFixed(1)}MB`,
            height: size.height,
            width: size.width,
            src: `/uploaded/${name}`,
          });
          createdResult.push(created);
        }
      } else {
        const size: { width: number; height: number } = sizes[0];
        const name = `IMG-${new Date().getTime()}${path.extname(images.name)}`;
        await images.mv(path.join(getRootDir(), `/static/uploaded/${name}`));
        const created = await Gallery.create({
          size:
            images.size / 1000 / 1000 < 1
              ? `${(images.size / 1000).toFixed(1)}KB`
              : `${(images.size / 1000 / 1000).toFixed(1)}MB`,
          height: size.height,
          width: size.width,
          src: `/uploaded/${name}`,
        });
        createdResult.push(created);
      }

      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: createdResult,
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
      const images = await Gallery.findAll();
      res.status(200).json({
        status: true,
        message: "Успешно!",
        data: images,
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
