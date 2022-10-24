import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    image: { type: String, required: true },
    description: { type: String },
    private: { type: Boolean },
    comments: { type: mongoose.Types.ObjectId, ref: "Comment" },
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

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
