import { Router, Request, Response } from "express"
import userRouter from "./user";
import buildingRouter from "./buidling";
const router = Router();

router.use('/user', userRouter);

router.use('/building', buildingRouter);

router.get('/', (req: Request, res: Response) => res.send("lets go!"));

export default router;