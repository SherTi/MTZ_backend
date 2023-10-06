import { Request, Router } from "express";
import { AuthController } from "./controller";
import { Settings } from "../../../model";

const router = Router();
const controller = new AuthController();
router.use((req: Request, res, next) => {
  Settings.findOne().then((val) => {
    if (val) {
      req.info = val.toJSON() as any;
    }
    next();
  });
});
router.get("/property_tractors/:id", controller.property_tractor);
router.get("/catalog_tractors_models/:id", controller.catalog_tractor);
router.get("/catalog_spare_parts", controller.catalog_parts);
router.get("/property_parts", controller.property_part);
router.get("/about_us", controller.about_company);
router.get("/contact", controller.contact);

export default router;
