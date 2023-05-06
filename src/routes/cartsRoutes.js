import express, { Router } from "express";
import {
  list,
  deleteOne,
  getOne,
  create,
  updateOne,
} from "../controllers/cartsController.js";

const cartRouter = Router();

cartRouter.use(express.json());

cartRouter.get("/api/carts", list);
cartRouter.get("/api/carts/:id", getOne);
cartRouter.post("/api/carts", create);
cartRouter.put("/api/carts", updateOne);
cartRouter.delete("/api/carts", deleteOne);

export default cartRouter;
