import db from "../../utils/db";
import data from "../../utils/data";
import User from '../../models/User'
import Book from "../../models/Book";
import Post from "../../models/Post";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Book.deleteMany();
  await Book.insertMany(data.books);
  await Post.deleteMany();
  await Post.insertMany(data.posts);
  await db.disconnect();
  res.send({ message: "Seeded successfully" });
};

export default handler;
