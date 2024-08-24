import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Building = sequelize.define('Building', {
   id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
   },
   location : {
    type : DataTypes.STRING
   }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'buildings'
});

export default Building;