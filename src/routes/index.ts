import {Router, Request, Response} from 'express';
import {indexController} from '../controllers/index.controller';

const router: Router = Router();

router.get('/test', indexController.index);

export default router;
