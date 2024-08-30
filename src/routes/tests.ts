import { Router } from "express";
import { firebaseTest, generateTestToken } from "../controllers/test";
const testRouter = Router();

testRouter.get('/firebase', firebaseTest);

testRouter.get('/', generateTestToken);

export default testRouter;