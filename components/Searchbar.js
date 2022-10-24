import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

export default function Searchbar() {
  return (
    <div className="w-[15rem] h-[2rem] flex items-center p-1 rounded gap-2">
      <SearchIcon className="h-5 w-5 text-gray-300" />
      <input type="text" placeholder="Type to search..." className="text-sm outline-none"/>
    </div>
  );
}
