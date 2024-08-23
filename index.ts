import express from "express";
import sequelize from "./src/config/database";
import AppRouter from "./src/routes"
import errorMiddleware from "./src/middlewares/error";

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

// Set environmnt to development
process.env.NODE_ENV = 'development';

// Database Connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT, async () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
});


// Base Router
app.use('/', AppRouter);
app.use(errorMiddleware);