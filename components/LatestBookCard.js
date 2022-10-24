import Link from "next/link";
import React from "react";

export default function LatestBookCard({ name, id, image }) {
  return (
    <div className="w-full relative">
      <div>
        {image ? (
          <Link href={`/book/${id}`}>
            <div>
              <div className="absolute inset-0 w-full h-full bg-black/60 bg-opacity-75 lg:cursor-pointer" />
              <img
                src={image}
                className="w-[17rem] h-[7rem] object-cover bg-center"
              />
            </div>
          </Link>
        ) : (
          <p>No hay imagen</p>
        )}
        <h2 className="font-semibold text-sm text-white absolute bottom-1 left-2">
          {name}
        </h2>
      </div>
    </div>
  );
}
