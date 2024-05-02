const { User } = require('./users');
const { Property } = require('./properties');

// imported the user and properties models here and defined the associatians between them.

// set up the associations here
Property.belongsToMany(User,{through: 'UserProperties'});// M:M properties to users
User.belongsToMany(Property,{through: 'UserProperties'});// M:M users to properties
//multiple users can edit and manage properties. 
 

// and then export them all below
module.exports = { User, Property }