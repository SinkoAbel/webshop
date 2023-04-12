import express from "express";
import {createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder} from "../controllers/OrderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;