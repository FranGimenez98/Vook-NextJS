import { DotsVerticalIcon, FilterIcon, PlusIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function BookCard({ id, image, name }) {
  return (
    <div className=" flex flex-col relative bg-white shadow-sm rounded-lg ">
      {image ? (
        <Link href={`/book/${id}`}>
          <div>
            <div className="absolute inset-0 w-full h-full bg-black/60 bg-opacity-75 lg:cursor-pointer"></div>
            <img
              src={image}
              className="w-[15rem] h-[15rem] object-cover bg-center"
            />
          </div>
        </Link>
      ) : (
        <h2>No hay image</h2>
      )}
      <button className="absolute z-1 w-3 h-5 bg-white rounded-sm top-1 right-1 text-black flex items-center justify-center">
        <DotsVerticalIcon className="h-3 w-3" />
      </button>
      <h2 className="font-semibold text-md text-white absolute bottom-0 left-1">
        {name}
      </h2>
      {/* <div className="p-2">
          <h2 className="font-semibold text-sm text-black">{name}</h2>
        </div> */}
    </div>
  );
}
