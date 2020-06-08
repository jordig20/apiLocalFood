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
exports.product = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const validation_1 = require("../lib/validation");
const ObjectId = require('mongoose').Types.ObjectId;
class ProductController {
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, name, price, userId, valuations, finalValuation, ingredients, description } = req.body;
                const product = new product_model_1.default({ type, name, price, userId, valuations, finalValuation, ingredients, description });
                yield product.save();
                validation_1.response(res, 200, `${product} Saved`);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    listById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new ObjectId(req.params.id);
            try {
                const products = yield product_model_1.default.find({ userId: id });
                res.send(products);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    // Update de un producto
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ObjectId(req.params.id);
            const update = req.body;
            yield product_model_1.default.findByIdAndUpdate(id, update, { new: true }, (err, todo) => {
                if (err) {
                    validation_1.response(res, 500, { error: 'Error 500' });
                }
                validation_1.response(res, 200, 'Ok');
            });
        });
    }
    // Devuelve productos por ciudad
    getProductsByCity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = req.params.city;
            const users = yield user_model_1.default.find({ city: city }, (err, users) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    return res.status(500).send(err);
                }
                else {
                    let result = users.map(user => user._id);
                    yield product_model_1.default.find({ userId: { $in: result } }, (err, products) => {
                        if (err) {
                            validation_1.response(res, 500, 'Error');
                        }
                        else {
                            res.status(200).send(products);
                        }
                    });
                }
            }));
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new ObjectId(req.params.id);
            try {
                const products = yield product_model_1.default.find({ _id: id });
                res.send(products);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
}
exports.product = new ProductController();
