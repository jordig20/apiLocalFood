import express from 'express';
// Imports de rutas
import IndexRoutes from './routes';
import UserRoutes from './routes/user';
import ProductRoutes from './routes/product';
import './database';

const config = require('./config');


// Inicializaciones
const app = express();
const cors = require('cors');


// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(config.application.cors.server));

// Routes
app.use('/', IndexRoutes);
app.use('/user', UserRoutes);
app.use('/product', ProductRoutes);

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


