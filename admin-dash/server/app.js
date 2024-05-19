import express from "express";
import userRoute from './routes/user.js';
import propertyRoute from './routes/property.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
//logging middleware
app.use(morgan('dev'));
//parsing middleware from form input data  and json
app.use(express.json()); //returns middleware 
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoute);
app.use('/properties', propertyRoute);

// 404 handler
app.use((req, res) => {
    res.status(404).send({error: '404 - Not Found', message: 'No route found for the requested URL'});
});

// error handling middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) res.status(500);
    res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});

export default app;
