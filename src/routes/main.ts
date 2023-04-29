import {Request, Response} from "express";

export class MainController {
    async get(req: Request, res: Response) {
        try {
            res.render("index", {
                styles: [
                    "header.css",
                    "style.css",
                    "footer.css"
                ],
                main: true,
                banner: true
            });
        } catch (e) {

        }
    }
}