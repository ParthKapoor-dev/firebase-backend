// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
require('dotenv').config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: JSON.parse(process.env.DB_PORT || ""),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})


export default sequelize;