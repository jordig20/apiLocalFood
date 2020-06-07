import mongoose, { model, Schema } from 'mongoose';

const UserSchema = new Schema({
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

export interface User extends mongoose.Document {
    type: string,
    name: string,
    adress: string,
    city: string,
    cp: string,
    mail: string,
    telf: string,
    delivery: boolean,
    premiumUser: boolean,
    password: string,
    products: [],
    valuations: [],
    finalValuation: number,
}

export default model<User>('User', UserSchema);
