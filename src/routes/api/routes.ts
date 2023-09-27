import { Router } from "express";
import authRoutes from "./auth/routes";
import { checkAuth } from "../../middleware/check_auth";
import productRoutes from "./product/routes";
import categoryRoutes from "./category/routes";
import galleryRoutes from "./gallery/routes";

const router = Router();
router.use("/auth", authRoutes);
router.use(checkAuth(false));
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/gallery", galleryRoutes);

export default router;
