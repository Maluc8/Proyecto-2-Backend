import express from "express";
import cartsRouter from "./routes/cartsRoutes.js";
import productsRouter from "./routes/productsRoutes.js";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { body } from "express-validator";

dotenv.config();

const app = express();
const viewsPath = path.resolve("./views");
const publicPath = path.resolve("./public");

app.use(express.static(publicPath));

void (async () => {
  await mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Conectado a la DB"));

  app.listen(8080, () => {
    console.log("Server is listening on port 8080...");
  });

  app.get("/api/products", productsRouter); //Listo
  app.get("/api/products/:id", productsRouter); //Listo
  app.post(
    "/api/products",
    body(
      "title",
      "description",
      "price",
      "thumbnail",
      "code",
      "stat"
    ).notEmpty(),
    productsRouter
  ); //Listo
  app.put(
    "/api/products",
    body(
      "id",
      "title",
      "description",
      "price",
      "thumbnail",
      "code",
      "stat"
    ).notEmpty(),
    productsRouter
  ); //Listo
  app.delete("/api/products", productsRouter); //Listo
  //app.get("/api/realtimeproducts", productsRouter);

  app.get(`/api/carts`, cartsRouter);
  app.get("/api/carts/:id", cartsRouter);
  app.post("/api/carts", cartsRouter);
  app.put("/api/carts", cartsRouter);
  app.delete("/api/carts", cartsRouter);
})();
