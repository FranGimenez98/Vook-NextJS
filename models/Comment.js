import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: String },
  },
  {
    timestamp: true,
  }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
