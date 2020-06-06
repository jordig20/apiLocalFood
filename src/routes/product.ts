import { Router } from 'express';
import { product } from '../controllers/product.controller';


const router: Router = Router();
const upload = require('../lib/storage');

router.get('/all/:id', product.listById);
router.get('/getone/:id', product.getOne);
router.get('/:city', product.getProductsByCity);
router.post('/add', product.addProduct);
router.put('/update/:id', product.update);
// router.put('/image/:id', product.addImage);

export default router;
