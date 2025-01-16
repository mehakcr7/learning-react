import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Product List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <div className="w-full lg:w-1/2">
        <img
          src={product.Image}
          alt={product.Name}
          className="rounded-lg shadow-md w-full"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.Name}</h2>
        <p className="text-gray-600 mb-4">{product.Description}</p>
        <p className="text-lg font-semibold text-gray-800">
          Price:{" "}
          <span className="text-blue-600">${product.Price.toFixed(2)}</span>
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
        >
          Back to Product List
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
