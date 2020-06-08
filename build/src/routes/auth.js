"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.Router();
router.post('/signup', auth_controller_1.auth.createUser);
router.post('/login', auth_controller_1.auth.signIn);
router.get('/private', auth_controller_1.auth.verify);
exports.default = router;
