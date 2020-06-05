import express from 'express';
// Imports de rutas
import IndexRoutes from './routes';
import UserRoutes from './routes/user';
import ProductRoutes from './routes/product';
import './database';

// Inicializaciones
const app = express();

// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
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

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

