import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";
import { HttpCodes, respond } from "../config/http";

export async function firebaseTest(req: Request, res: Response) {
    const db = admin.database();
    const ref = db.ref("name");

    ref.once("value", function (snapshot: any) {
        console.log(snapshot.val());
    });
    res.send("Success!");
}

export async function generateTestToken(req: Request, res: Response, next: NextFunction) {

    const uid = 'test-uid';

    try {
        const customToken = await admin.auth().createCustomToken(uid);

        respond(res, HttpCodes.OK, "Token Generated", customToken);
    } catch (error) {
        next(error);
    }
}