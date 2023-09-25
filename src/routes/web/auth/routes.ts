import { Router } from "express";
import { AuthController } from "./controller";

const router = Router();
const controller = new AuthController();
router.get("/property_tractors", controller.property_tractor);
router.get("/catalog_tractors_models", controller.catalog_tractor);
router.get("/catalog_spare_parts", controller.catalog_parts);
router.get("/property_parts", controller.property_part);
router.get("/about_us", controller.about_company);
router.get("/contact", controller.contact);

export default router;
