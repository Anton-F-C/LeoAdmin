import express, { json } from "express";
const app = express();
import userRoute from '../server/routes/user.js';
import propertyRoute from '../server/routes/property.js';


app.use(json()); //returns middleware 
app.use('/users', userRoute);
app.use('/properties', propertyRoute);




export default app;