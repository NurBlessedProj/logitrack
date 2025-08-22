import mongoose, { Schema } from "mongoose";

const userthreeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Userthree || mongoose.model("Userthree", userthreeSchema);
