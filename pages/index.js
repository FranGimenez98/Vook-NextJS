import { getSession, useSession } from "next-auth/react";
import BookCard from "../components/BookCard";
import LatestBookCard from "../components/LatestBookCard";
import Layout from "../components/Layout";
import Book from "../models/Book";
import db from "../utils/db";

export default function Home({books}) {
  console.log(books)

  return (
    <Layout title="Home">
      <div className="w-full">
        {/* <div className="w-full flex items-center justify-center">
          <Link href="/create-book">
            <a>
              <button className="button">CREATE BOOK</button>
            </a>
          </Link>
        </div> */}
        <div className="min-h-screen mt-[1rem] relative">
          <div className="lg:w-[75%] w-full bg-white rounded-md min-h-screen p-2 border-[1px] border-[#f5f7f7]">

          </div>
          <div className="hidden lg:flex gap-2 flex-col min-w-[18rem] min-h-[20rem] border-[1px] border-[#f5f7f7] bg-white absolute right-1 top-0 rounded-md  p-2">
            <h2 className="font-semibold">Latest VOOKS</h2>
            {
              books?.map((book) => (
                <LatestBookCard id={book._id} name={book.name} image={book.posts?.image} key={book._id}/>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({req}){
  const session = await getSession({req});
  
  await db.connect();
  const books = await Book.find({ user: session?.user?._id })
    .populate("user")
    .populate("posts")
    .lean();

  return{
    props: {
      books: JSON.parse(JSON.stringify(books)).slice(0, 3),
    }
  }
}
