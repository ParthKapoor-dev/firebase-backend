import { Router } from 'express';
import { checkUserExists, registerUser } from '../controllers/auth';
const authRouter = Router();

authRouter.post('/', registerUser);
authRouter.get('/check-user-exists', checkUserExists);

export default authRouter;