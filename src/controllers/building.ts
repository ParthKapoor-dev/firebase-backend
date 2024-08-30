import { NextFunction, Request, Response } from "express";
import { Building } from "../models";
import { HttpCodes, respond } from "../config/http";

export async function createBuilding(req: Request, res: Response, next: NextFunction) {

    const { floorMap, eti, city, state } = req.body;

    try {

        const building = await Building.create({
            floorMap, eti, city, state
        });

        respond(res, HttpCodes.OK, 'Building Created', building);

    } catch (error) {
        next(error)
    }
}

export default async function updateBuilding(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id;
    const { floorMap, eti, city, state } = req.body;

    try {

        const building = await Building.update(
            { floorMap, eti, city, state },
            { where: { id } }
        );

        respond(res, HttpCodes.OK, 'Building Updated', building);

    } catch (error) {
        next(error)
    }
}

export async function getBuildingById(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id;

    try {

        const building = await Building.findByPk(id);
        if (!building)
            throw new Error("Invalid Building ID");

        respond(res, HttpCodes.OK, 'Building Updated', building);

    } catch (error) {
        next(error)
    }
}