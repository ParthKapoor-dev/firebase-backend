import { NextFunction, Request, Response } from "express";
import { Building } from "../models";
import { HttpCodes, respond } from "../config/http";

export async function createBuilding(req: Request, res: Response, next: NextFunction) {

    const { floorMap, tti, city, state } = req.body;

    try {

        const building = await Building.create({
            floorMap, tti, city, state
        });

        respond(res, HttpCodes.OK, 'Building Created', building);

    } catch (error) {
        next(error)
    }
}

export default async function updateBuilding(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id;
    const { floorMap, tti, city, state } = req.body;

    try {

        const building = await Building.update(
            { floorMap, tti, city, state },
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