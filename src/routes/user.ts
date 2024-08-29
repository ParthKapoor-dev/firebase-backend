import { Router } from "express";
import { updateUser, userLogin } from "../controllers/user";
const userRouter = Router();

userRouter.put('/', updateUser);

userRouter.get('/login', userLogin)

export default userRouter;