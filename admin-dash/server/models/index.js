import  User  from './users.js';
import  Property  from './properties.js';

// imported the user and properties models here and defined the associatians between them.

// set up the associations here
User.belongsToMany(Property,{through: 'UserProperties', as: 'Properties'});// M:M properties to users
Property.belongsToMany(User,{through: 'UserProperties', as: 'Users'});// M:M users to properties
//multiple users can edit and manage properties. 
 

// and then export them all below
export { User, Property }