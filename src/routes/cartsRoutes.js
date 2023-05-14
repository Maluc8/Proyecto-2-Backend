import express, { Router } from "express";
import {
  list,
  deleteOne,
  getOne,
  create,
  updateOne,
  deleteOneProduct,
  updateQuantity,
} from "../controllers/cartsController.js";

const cartRouter = Router();

cartRouter.use(express.json());

cartRouter.get("/api/carts", list);
cartRouter.get("/api/carts/:id", getOne);
cartRouter.post("/api/carts", create);
cartRouter.put("/api/carts", updateOne);
cartRouter.put("/api/carts/:cid/products/:pid", updateQuantity);
cartRouter.delete("/api/carts", deleteOne);
cartRouter.delete("/api/carts/:cid/products/:pid", deleteOneProduct);

export default cartRouter;
