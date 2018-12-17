import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes';
import booksRoutes from './routes/books';
import config from '../config/config';
import datasource from '../config/datasource';

const app = express();

//Middleware
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json());

//Routes
indexRoutes(app);
booksRoutes(app);

export default app;