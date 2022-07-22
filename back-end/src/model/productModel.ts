import mongoose, { Schema, model } from "mongoose";
import ProductInterface from "../interfaces/ProductInterface";

const productSchema = new Schema<ProductInterface>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    offer: {
      type: Number,
    },
    // productPictures: {
    //   public_id: {
    //     type: String,
    //     required: true,
    //     default: "1hjkjhd",
    //   },
    //   url: {
    //     type: String,
    //     required: true,
    //     default: "xyz.png",
    //   },
    // },
    productPictures: [{ img: { type: String } }],
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, 
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

const Product = model<ProductInterface>("Product", productSchema);

export default Product;
