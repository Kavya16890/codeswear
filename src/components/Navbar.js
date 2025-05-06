import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
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
      <div onClick={toggleCart} className="cart absolute top-4 right-0 mx-5">
        <FaCartArrowDown className="cursor-pointer text-xl md:text-2xl" />
      </div>
      <div
        ref={ref}
        className="sideCart h-full w-72 absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-xl"
        >
          <IoMdCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirts - Wear the Code
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold space-x-3">
              <CiSquareMinus className="mx-1 text-5xl cursor-pointer" /> 1
                <CiSquarePlus className="mx-1 text-5xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold space-x-3">
                T-shirts - Wear the Code
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold space-x-3">
                <CiSquareMinus className="mx-1 text-5xl cursor-pointer" /> 1
                <CiSquarePlus className="mx-1 text-5xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirts - Wear the Code
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold space-x-3">
              <CiSquareMinus className="mx-1 text-5xl cursor-pointer" /> 1
              <CiSquarePlus className="mx-1 text-5xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                T-shirts - Wear the Code
              </div>
              <div className="w-1/3 flex items-center justify-center font-semibold space-x-3">
              <CiSquareMinus className="mx-1 text-5xl cursor-pointer" /> 1
              <CiSquarePlus className="mx-1 text-5xl cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>
        <button className="flex mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"><IoBagCheckOutline className="m-1"/>Checkout</button>
      </div>
    </div>
  );
};

export default Navbar;
