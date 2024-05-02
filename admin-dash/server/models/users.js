import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User',{
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    role: DataTypes.STRING
    
});

// module.exports = { User }

//Eventually I will make it some that users can upload a profile picture. 