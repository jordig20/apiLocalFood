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
exports.user = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const validation_1 = require("../lib/validation");
const ObjectId = require('mongoose').Types.ObjectId;
class UserController {
    // Añade un usuario
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, name, adress, city, cp, mail, telf, delivery, premiumUser, password, products, valuations, finalValuation } = req.body;
                const user = new user_model_1.default({ type, name, adress, city, cp, mail, telf, delivery, premiumUser, password, products, valuations, finalValuation });
                yield user.save();
                validation_1.response(res, 200, `${user._id} Saved`);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
    // Devuelve usuarios por ciudad
    // public async getUsersCity(req: Request, res: Response) {
    //     try {
    //         const city: string = req.params.nameCity.toLowerCase().trim();
    //         const type: string = req.params.type.toLowerCase().trim();
    //         const users: User[] = await UserModel.find({ city: city, type: type });
    //         res.status(200).send(`${users}`);
    //     } catch (e) {
    //         res.status(500).send(e);
    //     }
    // }
    getUsersCity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const city = req.params.nameCity.toLowerCase().trim();
                const type = req.params.type.toLowerCase().trim();
                const users = yield user_model_1.default.find({ city: city, type: type });
                res.send(users);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    // Devuelve todos los usuarios por ciudad
    allUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const city = req.params.nameCity.toLowerCase().trim();
                const users = yield user_model_1.default.find({ city: city });
                res.status(200).send(users);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
    // Update de un usuario
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send(todo);
            });
        });
    }
    // Delete de un usuario
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new ObjectId(req.params.id);
            yield user_model_1.default.findById(id, (err, user) => {
                if (err) {
                    res.status(500).send({ message: `Error al eliminar el user: ${err} ` });
                }
                else {
                    user === null || user === void 0 ? void 0 : user.remove(err => {
                        if (err) {
                            res.status(500).send({ message: `Error al eliminar el user: ${err} ` });
                        }
                        else {
                            res.status(200).send({ message: `Usuario eliminado` });
                        }
                    });
                }
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new ObjectId(req.params.id);
            try {
                const users = yield user_model_1.default.find({ _id: id });
                res.status(200).send(users);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
}
exports.user = new UserController();
