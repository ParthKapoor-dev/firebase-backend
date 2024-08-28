import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Firefighter = sequelize.define('Firefighter', {
    phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            len: [10, 10],
            min: 1000000000,
            max: 9999999999
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
    },
    fcmKey: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'firefighters'
});

export default Firefighter;