import { Router, Request, Response } from "express"
import authRouter from "./auth";
import syncRouter from "./sync";
const router = Router();

router.use('/auth' , authRouter);

router.use('/sync' , syncRouter)

router.get('/', (req: Request, res: Response) => res.send("lets go!"));

export default router;