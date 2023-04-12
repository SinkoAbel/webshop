import express from "express";
import {createOrder, deleteOrder} from "../controllers/OrderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/:id");
router.put("/:id");
router.delete("/:id", deleteOrder);

export default router;