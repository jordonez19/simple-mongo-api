import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: { type: String },
    price: { type: Number },
    category: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Products", productsSchema);