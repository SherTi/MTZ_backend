import { Router } from "express";
import { SettingsController } from "./controller";

const router = Router();

const controller = new SettingsController();

router.post("/update", controller.update);
router.get("/get", controller.get);

export default router;
