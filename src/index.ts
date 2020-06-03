import express from 'express';

// Imports de rutas
import IndexRoutes from './routes';
import UserRoutes from './routes/user';

// Inicializaciones
const app = express();
import './database';

// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', IndexRoutes);
app.use('/user', UserRoutes)

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});