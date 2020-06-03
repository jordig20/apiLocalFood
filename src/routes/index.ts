import {Router, Request, Response} from 'express';
import {indexController} from '../controllers/indexController';

const router: Router = Router();

router.get('/test', indexController.index);

export default router;