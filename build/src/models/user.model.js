"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    // type: { type: String, enum: ['restaurant', 'homechef', 'user'], default: 'user' },
    type: { type: String, required: true },
    name: { type: String, required: true },
    adress: String,
    city: String,
    cp: String,
    mail: { type: String, required: true },
    telf: String,
    delivery: Boolean,
    premiumUser: Boolean,
    password: { type: String, required: true },
    products: { type: Array, default: [] },
    valuations: { type: Array, default: [] },
    finalValuation: Number,
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('User', UserSchema);
