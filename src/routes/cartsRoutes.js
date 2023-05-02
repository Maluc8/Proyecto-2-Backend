import { Router } from "express";
import express from "express";
import cartsManager from "../managers/cartsManagers.js";

const cartsRouter = Router();
const manager = new cartsManager();

cartsRouter.use(express.json());

cartsRouter.get("/api/carts", manager.list);
cartsRouter.get("/api/carts/:id", manager.getOne);
cartsRouter.post("/api/carts", manager.create);
cartsRouter.put("/api/carts", manager.updateOne);
cartsRouter.delete("/api/carts", manager.deleteOne);

export default cartsRouter;
