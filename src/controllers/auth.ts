import { NextFunction, Request, Response } from "express";
import { admin } from "../config/firebase";
import { User } from "../models";
import { HttpCodes, respond } from "../config/http";


export async function registerUser(req: Request, res: Response, next: NextFunction) {

    const { phoneNumber, name, city, age, gender, medicalConditions } = req.body;

    try {

        const user = await User.create({
            phoneNumber, name, city, age, gender, medicalConditions
        });

        if (!user)
            throw new Error("User with this phoneNumber Already exists");

        respond(res, HttpCodes.OK, "User Registered Successfully", user);

    } catch (error) {
        next(error);
    }
}

export async function checkUserExists(req: Request, res: Response, next: NextFunction) {

    const token = req.headers['x-firebase-token'];

    try {
        if (!token)
            throw new Error("Token can't be null ");

        const decodedToken = await admin.auth().verifyIdToken(token);
        const user = await User.findByPk(decodedToken.uid);

        respond(
            res,
            HttpCodes.OK,
            user ? "User Exists" : "User Doesn't Exists",
            user ? true : false
        );
    } catch (error) {
        next(error);
    }

}