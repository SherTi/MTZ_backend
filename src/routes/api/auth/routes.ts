import {Router} from "express"
import {RouterController} from "./controller";

const router = Router()
const controller = new RouterController()
router.post("/sing-in", controller.singIn)

export default router
