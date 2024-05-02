import { User } from './users';
import { Property } from './properties';

// imported the user and properties models here and defined the associatians between them.

// set up the associations here
User.belongsToMany(User,{through: 'UserProperties', as: 'Properties'});// M:M properties to users
Property.belongsToMany(Property,{through: 'UserProperties', as: 'Users'});// M:M users to properties
//multiple users can edit and manage properties. 
 

// and then export them all below
export { User, Property }