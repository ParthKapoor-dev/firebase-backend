import { Router } from "express";
import updateBuilding, { createBuilding, getBuildingById } from "../controllers/building";
const buildingRouter = Router();

buildingRouter.post('/' , createBuilding);

buildingRouter.put('/:id' , updateBuilding);

buildingRouter.get('/:id' , getBuildingById);

export default buildingRouter;