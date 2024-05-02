import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Property = sequelize.define('Property',{
    name: DataTypes.STRING,
    bed: DataTypes.STRING,
    bath: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING
   
});

//module.exports = { Property }
//eventually I will make it so that images of the property can be uploaded. Also so that ratings can be shown. 

