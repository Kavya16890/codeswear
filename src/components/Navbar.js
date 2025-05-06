import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log({ cart, addToCart, removeFromCart, clearCart, subTotal });
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
        <div className="flex">
          <ol className="list-decimal font-semibold sm:block">
            {Object.keys(cart).length == 0 && <div className="my-4 font-normal">No items in the cart.</div>}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="w-1/3 flex items-center justify-center font-semibold space-x-3">
                      <CiSquareMinus className="mx-1 text-5xl cursor-pointer" onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].size, cart[k].variant)}}/>
                      {cart[k].qty}
                      <CiSquarePlus className="mx-1 text-5xl cursor-pointer" onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].size, cart[k].variant)}}/>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="flex">
          <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <IoBagCheckOutline className="m-1 text-lg" />
            Checkout
          </button>
          <button
            className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm"
            onClick={clearCart}
          >
            <IoIosRemoveCircle className="m-1 text-2xl" />
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
