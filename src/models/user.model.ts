import mongoose, { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    type: { type: String, enum: ['restaurant', 'homechef', 'user'], default: 'user' },
    name: String,
    adress: String,
    city: String,
    cp: String,
    mail: String,
    telf: String,
    delivery: Boolean,
    premiumUser: Boolean,
    password: String,
    products: { type: Array, default: [] },
    valuations: { type: Array, default: [] },
    finalValuation: Number,
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