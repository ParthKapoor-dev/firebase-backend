import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";
import { User } from "../models";
import { getToken, HttpCodes, respond } from "../config/http";


export async function registerUser(req: Request, res: Response, next: NextFunction) {

    const { phoneNumber, name, city, age, gender, medicalConditions } = req.body;

    try {

        const [user, created] = await User.findOrCreate({
            where: { phoneNumber },
            defaults: {
                phoneNumber, name, city, age, gender, medicalConditions
            }
        });

        if (!created)
            throw new Error("User with this phoneNumber Already exists");

        respond(res, HttpCodes.OK, "User Registered Successfully", user);

    } catch (error) {
        next(error);
    }
}

export async function checkUserExists(req: Request, res: Response, next: NextFunction) {

    const token = getToken(req);

    try {
        if (!token)
            throw new Error("Token can't be null ");

        const decodedToken = await admin.auth().verifyIdToken(token);
        const user = await User.findByPk(decodedToken.uid);

        respond(
            res,
            user ? HttpCodes.OK : HttpCodes.NOT_FOUND,
            user ? "User Exists" : "User Doesn't Exists",
            user ? true : false
        );
    } catch (error) {
        next(error);
    }

}