"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.post('/add', user_controller_1.user.addUser);
router.get('/allusers/:nameCity', user_controller_1.user.allUsers);
router.get('/getone/:id', user_controller_1.user.getOne);
router.get('/:nameCity/:type', user_controller_1.user.getUsersCity);
router.put('/update/:id', user_controller_1.user.update);
router.delete('/delete/:id', user_controller_1.user.delete);
exports.default = router;
