import { Router } from 'express';
import { product } from '../controllers/product.controller';


const router: Router = Router();
const upload = require('../lib/storage');

router.get('/all/:id', product.listById);
router.post('/add', product.addProduct);
router.post('/image');

export default router;
