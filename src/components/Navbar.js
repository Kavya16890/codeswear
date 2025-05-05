import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-start items-center py-2 shadow-md">
      <div className="logo mx-5">
        <Link href="/">
          <Image width={200} height={40} src="/logo.png" />
        </Link>
      </div>
      <div className="nav font-bold">
        <ul className="flex items-center space-x-6 md:text-md ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/tshirts">
            <li>T-shirts</li>
          </Link>
          <Link href="/hoodies">
            <li>Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
          <Link href="/stickers">
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute top-4 right-0 mx-5">
        <FaCartArrowDown className="cursor-pointer text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
