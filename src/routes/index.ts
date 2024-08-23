import { Router, Request, Response } from "express"
const router = Router();

// Only for testing. TODO: Secure this route
router.get('/sync', async (req: Request, res: Response) => {
    const sequelize = require('./config/database.js');
    await sequelize.sync({ alter: true });
    res.send('Successfully Synced');
});


export default router;