import { Router } from "express";
import { GalleryController } from "./controller";

const router = Router();
const controller = new GalleryController();

router.post("/create", controller.create);
router.get("/get/:id", controller.getOne);
router.get("/get", controller.getAll);
router.post("/delete/:id", controller.delete);

export default router;
