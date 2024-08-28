import { Router } from 'express';
import { userLogin } from '../controllers/auth';
const authRouter = Router();

authRouter.post('/' , userLogin);

export default authRouter;