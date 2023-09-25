import { Router } from "express";
import { MainController } from "./main";
import authRoutes from "./web/auth/routes";
import postsRoutes from "./web/posts/router";
import apiRoutes from "./api/routes"

const router = Router();

const mainController = new MainController();

router.get("/", mainController.get);
router.use(authRoutes);
router.use("/posts", postsRoutes);
router.use("/api", apiRoutes);
export default router;
