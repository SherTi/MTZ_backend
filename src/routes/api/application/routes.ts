import { Router } from "express";
import { ApplicationController } from "./controller";

const router = Router();
const controller = new ApplicationController();
router.get("/get", controller.get);
export default router;
