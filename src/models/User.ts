import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define('User', {
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: {
                msg: 'Phone number should contain only numeric values'
            },
            len: {
                args: [10, 10],
                msg: 'Phone number must be exactly 10 digits long'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
    },
    name: {
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

