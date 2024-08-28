import { NextFunction, Request, Response } from "express";
import { admin } from "../config/firebase";
import { User } from "../models";


export async function userLogin(req: Request, res: Response, next: NextFunction) {

    const { phoneNumber } = req.body;
    const token = req.headers['x-firebase-token'];
    try {

        if (!token)
            throw new Error("Token can't be null ");

        const decodedToken = await admin.auth().verifyIdToken(token);
        const user = await User.findByPk(decodedToken.uid);

        if (!user) {
            const createdUser = User.create({ phoneNumber });
            // respond()
        }

        res.locals.user = user;

    } catch (error) {
        next(error);
    }
}

// TODO : Update User

// export async function userSignup(req: Request, res: Response, next: NextFunction) {


//     try {

//     } catch (error) {
//         next(error);
//     }
// }


