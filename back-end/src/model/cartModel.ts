import mongoose,{ Schema, model } from "mongoose";
import CartInterface from "../interfaces/CartInterface";

const cartSchema = new Schema<CartInterface>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = model<CartInterface>("Cart", cartSchema);

export default Cart;
