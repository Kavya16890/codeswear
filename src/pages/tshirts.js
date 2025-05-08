import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-15 py-24 m-auto">
          <div className="flex flex-wrap justify-center text-center -m-4 ">
            {products.map((item) => {
              return (
                <Link
                  passHref={true}
                  key={item._id}
                  href={`/product/${item.slug}`}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg"
                >
                  <div className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="h-[36vh] m-auto block"
                      src={item.img}
                    />
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Wear the &lt;code/&gt;
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1">{item.size}</p>
                      <p className="mt-1">
                        Available Quantity: {item.availableQty}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category: 'tshirts'});
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Tshirts;
