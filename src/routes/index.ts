import { Router, Request, Response } from "express"
import userRouter from "./user";
import buildingRouter from "./buidling";
import { verifyToken } from "../middlewares/verifyToken";
import authRouter from "./auth";
import syncRouter from "./sync";
import testRouter from "./tests";
const router = Router();

router.use('/user', verifyToken, userRouter);

router.use('/auth', authRouter);

router.use('/sync', syncRouter);

router.use('/test', testRouter);

router.use('/building', buildingRouter);

router.get('/', (req: Request, res: Response) => res.send("lets go!"));

export default router;