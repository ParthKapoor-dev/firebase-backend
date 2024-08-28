import { Request, Response } from "express";
import { admin } from "../config/firebase";

export async function testing(req: Request, res: Response) {
    const db = admin.database();
    const ref = db.ref("name");

    ref.once("value", function (snapshot: any) {
        console.log(snapshot.val());
    });
    res.send("Success!");
}