import { Schema, model } from "mongoose";
import CategoryInterface from "../interfaces/CategoryInterface";

const categorySchema = new Schema<CategoryInterface>(
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
    categoryImage: { type: String },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = model<CategoryInterface>("Category", categorySchema);

export default Category;
