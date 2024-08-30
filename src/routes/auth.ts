import { Router } from 'express';
import { checkUserExists, registerUser } from '../controllers/auth';
import { verifyToken } from '../middlewares/verifyToken';
const authRouter = Router();

authRouter.post('/',  registerUser);
authRouter.get('/check-user-exists', checkUserExists);

export default authRouter;