import sequelize from "./database";
import { Express } from "express";

async function DatabaseConnection(app: Express) {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT, async () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }).catch((error: Error) => {
        console.error('Unable to connect to the database:', error);
        console.log(error.message)
    });
}

export default DatabaseConnection;