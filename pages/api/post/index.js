import Post from "../../../models/Post";
import db from "../../../utils/db";
import Book from "../../../models/Book";

export const handler = async (req, res) => {
  if (req.method === "POST") {
    return createPost(req, res);
  } else {
    return res.status(404).json({ message: "Method not allowed" });
  }
};

const createPost = async (req, res) => {
  // await db.connect();
  // try {
  //   const post = await Post.create(req.body);
  //   res.status(200).json(post, { message: "Post created successfully" });
  // } catch (err) {
  //   res.status(500).json(err, { message: "Post failed" });
  // }
  await db.connect();
  const newPost = new Post({...req.body});
  const book = await newPost.save();
  const updatePot = await Book.updateMany({$push: {posts: book}})
  res.status(201).send({book, updatePot});
};

export default handler