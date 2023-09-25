import {Router} from "express"
import {ProductController} from "./controller";

const router = Router();
const controller = new ProductController();

router.post("/create", controller.create);

export default router;