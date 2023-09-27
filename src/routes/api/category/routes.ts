import { Router } from "express";
import { CategoryController } from "./controller";

const router = Router();
const controller = new CategoryController();

router.post("/create", controller.create);
router.get("/get/:id", controller.getOne);
router.get("/get", controller.getAll);
router.post("/delete/:id", controller.delete);
router.post("/update/:id", controller.update);
export default router;
