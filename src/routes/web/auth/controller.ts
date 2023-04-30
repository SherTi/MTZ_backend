import {Request, Response} from "express";
import routes from "./routes";

export class AuthController {
    async property_tractor(req: Request, res: Response) {
        try {
            res.render("property_tractors", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            });
        } catch (e) {

        }
    }
    async catalog_tractor(req:Request,res:Response) {
        try {
            res.render("catalog_tractors_models", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            });
        } catch (e){

        }

    }
    async catalog_parts(req:Request,res:Response) {
        try {
            res.render("catalog_spare_parts", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            });
        } catch (e){

        }

    }
    async property_part(req:Request,res:Response) {
        try {
            res.render("property_parts", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            });
        } catch (e){

        }

    }
    async about_company(req:Request,res:Response) {
        try {
            res.render("about_us", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            });
        }catch (e){

        }
    }

    async contact(req:Request,res:Response){
        try{
            res.render("contact" , {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ]
            })
        }catch (e){

        }
    }
}