import {Router, Request, Response} from 'express';

const router: Router = Router();

import { userController } from '../controllers/userController';

router.post('/add', userController.addUser);

export default router;