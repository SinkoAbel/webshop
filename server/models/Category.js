import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        index: true
    }
});

export default mongoose.model("Category", CategorySchema);