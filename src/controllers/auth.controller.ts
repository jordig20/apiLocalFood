import { Request, Response } from 'express';
import UserModel, { User } from '../models/user.model';
import { verifyToken } from '../lib/jwt';


const ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');


class AuthController {

    // Crear usuario y devuelve token
    public async createUser(req: Request, res: Response) {
        const { type, name, mail, password } = req.body;
        const newUser: User = new UserModel({ type, name, mail, password });
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id }, '6F&@u0}YP)~w1I$$sZ]9');
        return res.status(200).json({ token });
    }

    // Login y devuelve token
    public async signIn(req: Request, res: Response) {
        const { type, name, mail, password } = req.body;
        const user = await UserModel.findOne({ mail });
        if (!user) {
            return res.status(401).send('El correo no existe');
        }
        if (user.password !== password) {
            return res.status(401).send('Contraseña erronea');
        }
        const token = jwt.sign({ _id: user._id }, '6F&@u0}YP)~w1I$$sZ]9');
        return res.status(200).json({ token });
    }

    public async verify(req: Request, res: Response) {
        verifyToken(req, res, () => {
        });
    }
}


export const auth = new AuthController();
