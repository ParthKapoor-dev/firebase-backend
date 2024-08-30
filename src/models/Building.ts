import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Building = sequelize.define('Building', {
   id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
   },
   floorMap : {
    type : DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER))),
    allowNull : false
   },
   tti : {
    type : DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER))),
   },   
   city : {
    type : DataTypes.STRING
   },
   state : {
    type : DataTypes.STRING
   }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'buildings'
});

export default Building;