import { NextFunction, Request, Response } from "express";
import { User } from "../models";
import { HttpCodes, respond } from "../config/http";

export async function updateUser(req: Request, res: Response, next: NextFunction) {

    const user = res.locals.user;
    const updatedUserInfo = req.body;

    try {
        const updatedUser = await User.update(
            { ...updatedUserInfo },
            { where: { id: user.id } }
        )

        if (!updatedUser) throw new Error("User Doesn't Exists");

        respond(res, HttpCodes.OK, 'User Updated Successfully', updatedUser);
    } catch (error) {
        next(error);
    }
}


export async function userLogin(req: Request, res: Response, next: NextFunction) {

    const user = res.locals.user;
    console.log(user)

    try {
        respond(res, HttpCodes.OK, "User Found", res.locals.user);
    } catch (error) {
        next(error)
    }
}
