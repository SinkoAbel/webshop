import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    photo_path: {
        type: String,
        required: true
    }
});

export default mongoose.model("Product", ProductSchema);