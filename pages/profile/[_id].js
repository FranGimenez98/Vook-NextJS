import Link from "next/link";
import React from "react";
import BookCard from "../../components/BookCard";
import Layout from "../../components/Layout";
import Book from "../../models/Book";
import User from "../../models/User";
import db from "../../utils/db";

export default function ProfileScreen({ books, user }) {
  console.log("User", user);

  return (
    <Layout title={user.username}>
      <div className=" max-w-screen min-h-screen mt-[1rem] flex flex-col p-1 ">
        <div className="w-full bg-white h-[4rem] mb-5 rounded-lg shadow-sm"></div>
        {/* <h2 className="text-lg font-semibold mb-[.5rem]">Your Vooks</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 bg-white w-full rounded-lg shadow-sm">
          {books?.map((book) => (
            <BookCard
              key={book._id}
              id={book._id}
              image={book.posts?.image}
              name={book.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { _id } = query;
  console.log("params", _id);

  await db.connect();
  const books = await Book.find({ user: _id })
    .populate("user")
    .populate("posts")
    .lean();

  const user = await User.findById(_id);
  await db.disconnect();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

