import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    profilePicture: { type: String },
    about: { type: String },
    livesIn: { type: String },
    country: { type: String },
    followers: [],
    following: [],
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
