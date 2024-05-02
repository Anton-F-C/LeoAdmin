import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User',{
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    role: DataTypes.STRING   
});

export default User;
