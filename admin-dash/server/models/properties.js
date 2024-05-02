import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

const Property = sequelize.define('Property',{
    name: DataTypes.STRING,
    bed: DataTypes.STRING,
    bath: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING
   
});

export default Property;

//in order to not use curly braces we can export with default. since we don't use require anymore because of the new ESModule.


//eventually I will make it so that images of the property can be uploaded. Also so that ratings can be shown. 

