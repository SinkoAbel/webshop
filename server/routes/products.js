import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct
} from "../controllers/ProductController.js";
import {verifyAdmin} from "../utils/verify.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", verifyAdmin, createProduct);
router.get("/:id", getProductById);
router.put("/:id", verifyAdmin,updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);

export default router;