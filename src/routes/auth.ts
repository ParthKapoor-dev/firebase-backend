import { Router } from 'express';
import { userLogin } from '../controllers/login';
const authRouter = Router();

authRouter.post('/' , userLogin);

export default authRouter;