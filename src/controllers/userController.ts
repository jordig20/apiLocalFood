import {Request, Response} from 'express';

class UserController {
    public addUser (req: Request, res: Response): void {
        console.log(req.body);
        res.send('received');
    }
}

export const userController = new UserController();