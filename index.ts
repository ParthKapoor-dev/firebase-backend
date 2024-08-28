import express from "express";
import AppRouter from "./src/routes"
import errorMiddleware from "./src/middlewares/error";
import DatabaseConnection from "./src/config/connect";
import { testing } from "./src/controllers/test";
import authRouter from "./src/routes/auth";
import { verifyToken } from "./src/middlewares/verifyToken";

const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');
app.use(cors({
    origin: function (origin: string, callback: any) {
        if (allowedOrigins?.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

process.env.NODE_ENV = 'development';
DatabaseConnection(app);

// Base Router
app.use('/auth', authRouter)
app.use('/', verifyToken, AppRouter);
app.use(errorMiddleware);