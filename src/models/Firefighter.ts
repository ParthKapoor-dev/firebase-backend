import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Firefighter = sequelize.define('User', {
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
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
        get() {
            return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`
        },
        set(val) {
            throw new Error('Cannot set full-name')
        },
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'users'
});

export default Firefighter;