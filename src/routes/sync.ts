import { Router, Request, Response } from "express"
import sequelize from "../config/database";
const syncRouter = Router();

syncRouter.get('/', async (req: Request, res: Response) => {
    await sequelize.sync({ alter: true });
    res.send('Successfully Synced');
});

export default syncRouter
