import {Router} from "express";
import {AuthController} from "./controller";
import * as path from "path";

const router = Router();
const controller = new AuthController()

router.get("/register", controller.register);
router.post("/register", controller.create);
router.get("/property_tractors" , controller.property_tractor);



export default router;