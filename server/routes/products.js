import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.post("/:id", createProduct)
router.delete("/:id", deleteProduct);

export default router;