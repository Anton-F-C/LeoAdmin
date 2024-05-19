import { sequelize} from './db.js';
import  User  from '../models/users.js';
import  Property  from '../models/properties.js';
import '../models/index.js';

async function seed() {
    await sequelize.sync({ force: true });

    const user = await User.create({
        name: 'Anton',
        phone: 3122005432,
        email: 'ant@rentals.com',
        role: 'Admin'
    });
    
    const propertiesData = [
        {
            name: 'Cottage',
            bed: '3',
            bath: '4',
            size: 2900,
            price: 500,
            location: 'San Dieago, CA'
        },
        {
            name: 'Treehouse',
            bed: '2',
            bath: '1',
            size: 800,
            price: 250,
            location: 'Madison, WI'
        }
    ];

    const properties = await Promise.all(propertiesData.map(propertyData => Property.create(propertyData)));

await Promise.all(properties.map(property => user.addProperties(property)));

console.log('Seeded successfully!');

}

seed();
