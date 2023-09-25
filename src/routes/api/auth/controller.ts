import {Request, Response} from "express";

export class RouterController {
    async singIn(req:Request, res:Response) {
        try {
            const {login, password} = req.body
            if (!login || !password) {
                res.status(400).json({
                    status: false,
                    message: "Нет необходимых данных!",
                    data: null
                })
            }
            res.status(200).json({
                status: true,
                message: "Успешно!",
                data: {
                    auth: "441e43ede0b9edbda262601058e10c12"
                },
            });
        }catch (e){
            console.log(e);
            res.status(500).json({
                status: false,
                message: "Увы что то пошло не так",
                data: null
            });
        }
    }
}