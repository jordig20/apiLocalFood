import express from 'express';
// Imports de rutas
import IndexRoutes from './routes';
import UserRoutes from './routes/user';
import ProductRoutes from './routes/product';
import AuthRoutes from './routes/auth';
import './database';
import bodyParser = require('body-parser');

// Inicializaciones
const app = express();

// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.json({ limit: '2000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '2000mb' }));
app.use(express.raw({
    type: 'image/*',
    limit: '1mb',
}));
app.use(express.urlencoded({ extended: false }));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/', IndexRoutes);
app.use('/user', UserRoutes);
app.use('/product', ProductRoutes);
app.use('/auth', AuthRoutes);

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

