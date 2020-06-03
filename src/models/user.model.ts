import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    type: { type: String, enum: ['restaurant', 'homechef', 'user'], default: 'user' },
    id: String,
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

});

export default model('User', UserSchema);
