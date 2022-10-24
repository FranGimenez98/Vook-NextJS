import mongoose from "mongoose";
import Post from "./Post";

const bookSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    posts: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    private: { type: Boolean },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;
