import { Request, Router } from "express";
import { MainController } from "./main";
import authRoutes from "./web/auth/routes";
import postsRoutes from "./web/posts/router";
import apiRoutes from "./api/routes";
import { Settings } from "../model";
import applicationRoutes from "./web/application/routes";

const router = Router();

const mainController = new MainController();

router.get(
  "/",
  (req: Request, res, next) => {
    Settings.findOne().then((val) => {
      if (val) {
        req.info = val.toJSON() as any;
      }
      next();
    });
  },
  mainController.get,
);
router.use("/application", applicationRoutes);
router.use(authRoutes);
router.use("/posts", postsRoutes);
router.use("/api", apiRoutes);
export default router;
