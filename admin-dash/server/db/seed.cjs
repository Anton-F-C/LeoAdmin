import { db } from './db.js'
import { User } from '../models/users.js'
import { Property } from '../models/properties.js'

async function seed() {
    await db.sync({force: true})

    const [user, properties] = await Promise.all([
        User.create({
            name: 'Bertha', 
            phone: 7084112907,
            email: 'Bertha@rentals.com', 
            role: 'Administrator'
        }),
        Property.bulkCreate([
            {  
                name: 'Tea Tree Villa',
                bed: 4,
                bath: 3,
                size: 3000,
                price: 2000,
                location: 'San Diego, CA'
            },
            {  
                name: 'Shady Oaks',
                bed: 2,
                bath: 2,
                size: 2250,
                price: 2000,
                location: 'Newark, NY'
            }
        ])
    ])

    await Promise.all(properties.map(property => property.setUser(user)))
    console.log(`seeded successfully`);
}

seed();
