import React, { useRef } from "react";
import Link from "next/link";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";


const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <>
      <div className="container m-auto">
        <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
        <h2 className="container text-xl font-semibold ml-7">
          1. Delivery Details
        </h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div className="mb-4 ml-5">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              rows={2}
              cols={30}
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone No.
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4 ml-5">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <h2 className="container text-xl font-semibold ml-7">
          2. Review Cart Items & Pay
        </h2>
        <div className="sideCart bg-pink-100 p-6 m-4">
          <div className="flex">
            <ol className="list-decimal font-semibold sm:block">
              {Object.keys(cart).length == 0 && (
                <div className="my-4 font-normal">No items in the cart.</div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="font-semibold">{cart[k].name}</div>
                      <div className="w-1/3 flex items-center justify-center font-semibold space-x-3 -mt-3">
                        <CiSquareMinus
                          className="mx-1 text-3xl cursor-pointer"
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                        />
                        {cart[k].qty}
                        <CiSquarePlus
                          className="mx-1 text-3xl cursor-pointer"
                          onClick={() => {
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex">
            <span className="font-bold ml-2 mt-5">Subtotal: ₹{subTotal}</span>
            <button
              className="flex mx-5 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              <MdOutlinePayment className="m-1 text-2xl" />
              <p className="mt-1">Pay ₹{subTotal}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
