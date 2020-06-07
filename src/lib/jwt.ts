import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

export function verifyToken(req: Request, res: Response, next: any) {
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

