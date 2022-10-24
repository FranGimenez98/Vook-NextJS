import { Menu } from "@headlessui/react";
import { BookOpenIcon, UserIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import DropdownLink from "./DropdownLink";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className=" w-full flex items-center justify-center h-16 bg-white border-b-[1px] border-b-[#f5f7f7]">
      <nav className="w-full flex justify-between items-center px-2">
        <Link href="/">
          <a className="text-2xl font-bold text-[#03ddfc] pl-8">VOOK</a>
        </Link>

        <Searchbar />
        <div className="flex items-center gap-1 pr-8">
          {/* <Link href="/">
            <a>HOME</a>
          </Link> */}
          {session?.user ? (
            <>
              {session.user.image ? (
                <div>Hay fotos</div>
              ) : (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="bg-gray-300 rounded-full p-1 flex items-center">
                    <UserIcon className="w-6 h-6" />
                  </Menu.Button>
                  <Menu.Items className="p-1 absolute right-0 min-w-[10rem] origin-top-right bg-white rounded-md shadow-xl mt-1 z-20">
                    <Menu.Item>
                      <DropdownLink
                        href={`/profile/${session.user._id}`}
                        className="dropdown-link"
                      >
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        href={`/profile/${session.user._id}`}
                        className="dropdown-link"
                      >
                        AJAX
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                  
                </Menu>
              )}

              {/* <a className="text-sm font-semibold">{session.user.name}</a> */}
            </>
          ) : (
            <Link href="/login">
              <a>
                <button className="button">Login</button>
              </a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
