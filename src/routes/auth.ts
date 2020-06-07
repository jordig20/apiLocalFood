import { Router } from 'express';
import { auth } from '../controllers/auth.controller';

const router: Router = Router();

router.post('/signup', auth.createUser);
router.post('/login', auth.signIn);
router.get('/private', auth.verify);
export default router;

