"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Acceso no permitido');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Acceso no permitido');
    }
    const payload = jwt.verify(token, '6F&@u0}YP)~w1I$$sZ]9');
    console.log(payload);
}
exports.verifyToken = verifyToken;
