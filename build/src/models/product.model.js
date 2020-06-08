"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    type: { type: String, enum: ['aperitivo', 'postre', 'japonesa', 'tradicional', 'fastFood'], default: 'tradicional' },
    name: String,
    price: String,
    userId: String,
    valuations: [],
    finalValuation: Number,
    ingredients: String,
    description: String,
});
exports.default = mongoose_1.model('Product', ProductSchema);
