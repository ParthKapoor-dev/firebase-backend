import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";
import { User } from "../models";
import { getToken } from "../config/http";


export async function verifyToken(req: Request, res: Response, next: NextFunction) {

    const token = getToken(req)

    try {
        if (!token)
            throw new Error("Token can't be null ");

        const decodedToken = await admin.auth().verifyIdToken(token);
        const user = await User.findByPk(decodedToken.uid);
        if (!user)
            throw new Error("Invalid User Id");

        res.locals.user = user;
        next();

    } catch (error) {
        next(error);
    }
}