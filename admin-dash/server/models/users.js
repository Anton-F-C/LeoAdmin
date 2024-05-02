import { sequelize } from '../db/db';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User',{
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    role: DataTypes.STRING
    
});
