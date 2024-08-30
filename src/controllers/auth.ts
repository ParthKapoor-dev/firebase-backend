import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";
import { User } from "../models";
import { getToken, HttpCodes, respond } from "../config/http";


export async function registerUser(req: Request, res: Response, next: NextFunction) {


    const token = getToken(req);
    const { phoneNumber, name, city, age, gender, medicalConditions } = req.body;

    try {

        if (!token)
            throw new Error("Token can't be null ");
        const id = (await admin.auth().verifyIdToken(token)).uid;

        const [user, created] = await User.findOrCreate({
            where: { id },
            defaults: {
                id, phoneNumber, name, city, age, gender, medicalConditions
            }
        });

        if (!created)
            throw new Error("User with this Id Already exists");

        respond(res, HttpCodes.CREATED, "User Registered Successfully", user);

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
            user ? "User Exist" : "User Doesn't Exist",
            user ? true : false
        );
    } catch (error) {
        next(error);
    }

}