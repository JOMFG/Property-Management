import { Response, Request, NextFunction } from "express";


export function login(req: Request, res: Response, next: NextFunction) {
    const { userName, password } = req.body;

    res.json({ 
        message: "Hi"
    });
}