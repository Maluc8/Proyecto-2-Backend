import mongoose, { Schema } from "mongoose";

const cartCollection = `cart`;

const CartSchema = new Schema({
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: `product`, require: true },
      quantity: { type: Schema.Types.Number, require: true },
    },
  ],
});

export default mongoose.model(cartCollection, CartSchema);
