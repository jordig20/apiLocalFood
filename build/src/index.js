"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Imports de rutas
const routes_1 = __importDefault(require("./routes"));
const user_1 = __importDefault(require("./routes/user"));
const product_1 = __importDefault(require("./routes/product"));
const auth_1 = __importDefault(require("./routes/auth"));
require("./database");
const bodyParser = require("body-parser");
// Inicializaciones
const app = express_1.default();
// Config
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(bodyParser.json({ limit: '2000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '2000mb' }));
app.use(express_1.default.raw({
    type: 'image/*',
    limit: '1mb',
}));
app.use(express_1.default.urlencoded({ extended: false }));
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Routes
app.use('/', routes_1.default);
app.use('/user', user_1.default);
app.use('/product', product_1.default);
app.use('/auth', auth_1.default);
// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
