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

        respond(res, HttpCodes.OK, 'User Updated Successfully', updateUser);
    } catch (error) {
        next(error);
    }
}