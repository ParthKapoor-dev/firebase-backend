import { Router } from "express";
import { updateUser } from "../controllers/user";
const userRouter = Router();

userRouter.put('/', updateUser);

export default userRouter;