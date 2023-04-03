import mongoose from "mongoose";

const ProductPhotoSchema = new mongoose.Schema({
    photo_path: {
        type: String,
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

export default mongoose.model("Product_photo", ProductPhotoSchema);