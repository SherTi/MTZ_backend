import { Router } from "express";
import authRoutes from "./auth/routes";
import {checkAuth} from "../../middleware/check_auth";
import productRoutes from "./product/routes";

const router = Router();
router.use("/auth", authRoutes);
router.use(checkAuth(false));
router.use("/product", productRoutes);

export default router;
