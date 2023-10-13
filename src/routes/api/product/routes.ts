import { Router } from "express";
import { ProductController } from "./controller";

const router = Router();
const controller = new ProductController();

router.post("/create", controller.create);
router.get("/get", controller.get);
router.post("/delete", controller.delete);
router.post("/recommended", controller.toPopular);

export default router;
