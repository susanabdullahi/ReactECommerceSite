import React from "react";

const ProductList = ({ name, disc, price, image }) => {
  return (
    <div className="rounded-xl w-[300px] h-[360px] m-5 shadow-md hover:shadow-lg transition ease-in duration-300 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="rounded-t-xl w-full h-[200px] object-cover"
      />
      <h1 className="px-5 py-2.5 m-0">{name}</h1>
      <h4 className="text-gray-500 px-5 py-2.5 m-0">${price}</h4>
      <p className="text-red-500 px-5 py-2.5 m-0">{disc}</p>
    </div>
  );
};

export default ProductList;
