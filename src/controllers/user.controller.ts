import { Request, Response } from 'express';
import UserModel, { User } from '../models/user.model';

const ObjectId = require('mongoose').Types.ObjectId;

export {};


class UserController {
    // Añade un usuario
    public async addUser(req: Request, res: Response): Promise<void> {
        try {
            const { type, name, adress, city, cp, mail, telf, delivery, premiumUser, password, products, valuations, finalValuation } = req.body;
            const user: User = new UserModel({ type, name, adress, city, cp, mail, telf, delivery, premiumUser, password, products, valuations, finalValuation });
            await user.save();
            res.send(`${user} Saved`);
        } catch (e) {
            res.send(e);
        }

    }

    // Devuelve usuarios por ciudad
    public async getUsersCity(req: Request, res: Response) {
        try {
            const city: string = req.params.nameCity.toLowerCase().trim();
            const type: string = req.params.type.toLowerCase().trim();
            const users: User[] = await UserModel.find({ city: city, type: type });
            res.send(users);
        } catch (e) {
            res.send(e);
        }
    }


    // Devuelve todos los usuarios por ciudad
    public async allUsers(req: Request, res: Response) {
        try {
            const city: string = req.params.nameCity.toLowerCase().trim();
            const users: User[] = await UserModel.find({ city: city });
            res.send(users);
        } catch (e) {
            res.send(e);
        }
    }

    // Update de un usuario
    public async update(req: Request, res: Response) {
        try {
            const id = new ObjectId(req.params.id);
            const user: User[] = await UserModel.find({ _id: id });
            res.send(user);
        } catch (e) {
            res.send(e);
        }
    }

    // Delete de un usuario
    public async delete(req: Request, res: Response) {
        const id = new ObjectId(req.params.id);

        await UserModel.findById(id, (err, user) => {
            if (err) {
                res.status(500).send(
                    { message: `Error al eliminar el user: ${err} ` },
                );
            } else {
                user?.remove(err => {
                    if (err) {
                        res.status(500).send({ message: `Error al eliminar el user: ${err} ` });
                    } else {
                        res.status(200).send({ message: `Usuario eliminado` });
                    }
                });
            }
        });
    }

}

export const user: UserController = new UserController();
