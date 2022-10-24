import { getSession } from "next-auth/react";
import Book from "../../../models/Book";
import db from "../../../utils/db";

const handler = async (req, res) => {
  // if (req.method === "POST") {
  //   return createBook(req, res);
  // } else {
  //   return res.status(400).send({ message: "Method not allowed" });
  // }

  // const createBook = async (req, res) => {
  //   await db.connect();
  //   try {
  //     const book = await Book.create(req.body);
  //     res.status(200).json(book, { message: "Post created successfully" });
  //   } catch (err) {
  //     res.status(500).json(err, { message: "Error creating post" });
  //   }
  // };
  const session = await getSession({ req });
  const { user } = session;
  await db.connect();
  const newBook = new Book({
    ...req.body,
    user: user._id,
  });

  const book = await newBook.save();
  res.status(201).send(book);
};

export default handler;
