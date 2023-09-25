import { Router } from "express";
import { AuthController } from "./controller";
import {checkAuth} from "../../../middleware/check_auth";

const router = Router();
const controller = new AuthController();
router.post("/sing-in", controller.singIn);
router.get("/check", checkAuth(true));

export default router;
