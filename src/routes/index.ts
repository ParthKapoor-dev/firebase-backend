import { Router, Request, Response } from "express"
import userRouter from "./user";
const router = Router();

router.use('/user', userRouter);

router.get('/', (req: Request, res: Response) => res.send("lets go!"));

export default router;