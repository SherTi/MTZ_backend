import { Router } from "express";
import { ApplicationController } from "./controller";

const router = Router();
const controller = new ApplicationController();

router.post("/", controller.createApplication);

export default router;
