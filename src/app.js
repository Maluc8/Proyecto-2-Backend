import express from "express";
import cartRouter from "./routes/cartsRoutes.js";
import productRouter from "./routes/productsRoutes.js";
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

  app.get("/api/products", productRouter);
  app.get("/api/products/:id", productRouter);
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
    productRouter
  );
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
    productRouter
  );
  app.delete("/api/products", productRouter);
  //app.get("/api/realtimeproducts", productRouter);

  app.get(`/api/carts`, cartRouter);
  app.get("/api/carts/:id", cartRouter);
  app.post("/api/carts", cartRouter);
  app.put("/api/carts", cartRouter);
  app.delete("/api/carts", cartRouter);
})();
