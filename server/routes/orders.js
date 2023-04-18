import express from "express";
import {createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder} from "../controllers/OrderController.js";
import {verifyAdmin, verifyUser} from "../utils/verify.js";

const router = express.Router();

router.get("/", verifyAdmin,getAllOrders);
router.post("/", verifyUser, createOrder);
router.get("/:id", verifyUser, getOrderById);
router.put("/:id", verifyUser, updateOrder);
router.delete("/:id", verifyUser, deleteOrder);

export default router;