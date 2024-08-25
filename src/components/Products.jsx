import React from "react";
import { Data } from "./Data";
import ProductList from "./ProductList";

function Products() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col mt-2.5">
      <h1 className="font-cursive text-6xl">our products</h1>
      <div className="w-[70vw] h-auto grid grid-cols-3 place-items-center gap-5 md:grid-cols-2 sm:grid-cols-1">
        {Data.map((d) => (
          <ProductList
            key={d.id} // Use unique id here
            name={d.name}
            disc={d.disc}
            price={d.price}
            image={d.Image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
