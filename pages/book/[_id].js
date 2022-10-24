import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Book from "../../models/Book";
import db from "../../utils/db";
import Post from "../../models/Post";

export default function BookScreen({ book, posts }) {
  const [post, setPost] = useState([]);


  useEffect(() => {
    setPost(posts);
  }, [posts]);

  return (
    <Layout title={`${book.name}`}>
      <div className="w-full min-h-screen">

      <h1 className="text-lg font-semibold">{book.name}</h1>
      <div>
        <Formik
          initialValues={{
            image: "",
            description: "",
          }}
          onSubmit={async (values) => {
            await axios.post(`/api/post`, {
              book: book._id,
              post: post._id,
              image: values.image,
              description: values.description,
            });
          }}
        >
          <Form>
            <label>image</label>
            <Field name="image" type="text" />
            <label>description</label>
            <Field name="description" />
            <button type="submit">POST</button>
          </Form>
        </Formik>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {post.map((post) => (
            <div key={post._id}>
              <img src={post.image} className="max-w-[14rem] max-h-[20rem]" />
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { _id } = params;
  await db.connect();
  const book = await Book.findById(_id);

  const posts = await Post.find({ book: _id }).lean();

  return {
    props: {
      book: JSON.parse(JSON.stringify(book)),
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};
