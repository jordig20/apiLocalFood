"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jwt_1 = require("../lib/jwt");
const ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');
class AuthController {
    // Crear usuario y devuelve token
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, name, mail, password } = req.body;
            const newUser = new user_model_1.default({ type, name, mail, password });
            yield newUser.save();
            const token = jwt.sign({ _id: newUser._id }, '6F&@u0}YP)~w1I$$sZ]9');
            return res.status(200).json({ token });
        });
    }
    // Login y devuelve token
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, name, mail, password } = req.body;
            const user = yield user_model_1.default.findOne({ mail });
            if (!user) {
                return res.status(401).send('El correo no existe');
            }
            if (user.password !== password) {
                return res.status(401).send('Contraseña erronea');
            }
            const token = jwt.sign({ _id: user._id }, '6F&@u0}YP)~w1I$$sZ]9');
            const id = user._id;
            return res.status(200).json({ token, id });
        });
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            jwt_1.verifyToken(req, res, () => {
            });
        });
    }
}
exports.auth = new AuthController();
