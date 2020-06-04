import { Router } from 'express';
import { user } from '../controllers/user.controller';

const router: Router = Router();

router.post('/add', user.addUser);
router.get('/allusers/:nameCity', user.allUsers);
router.get('/:nameCity/:type', user.getUsersCity);
router.put('/update/:id', user.update);
router.delete('/delete/:id', user.delete);

export default router;
