import mongoose, { Schema } from 'mongoose';

mongoose.set('useCreateIndex', true);

const AuthSchema = new Schema({
    name: String,
    mail: String,
    password: String,
});

export interface Auth extends mongoose.Document {
    name: string,
    mail: string,
    password: string,
}


