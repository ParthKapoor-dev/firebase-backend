import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define('User', {
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
    },
    fullName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    medicalConditions: {
        type: DataTypes.TEXT,
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female']
    },
    fcmKey: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'users'
});

export default User;

