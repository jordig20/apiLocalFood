import mongoose, { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    type: { type: String, enum: ['aperitivo', 'postre', 'japonesa', 'tradicional', 'fastFood'], default: 'tradicional' },
    name: String,
    price: String,
    userId: String,
    valuations: [],
    finalValuation: Number,
    ingredients: String,
    description: String,
});

export interface Product extends mongoose.Document {
    type: string,
    name: string,
    price: string,
    userId: string,
    valuations: [],
    finalValuation: number,
    ingredients: string,
    description: string,
}

export default model<Product>('Product', ProductSchema);
