import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products , addToCart}) {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Explore Our Products
      </h1>
      <div className="container flex justify-center  mx-auto">
        <div className="grid  lg:grid-cols-4 w-11/12 gap-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </Link>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
                    {product.Name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {product.Description.length > 60
                      ? `${product.Description.slice(0, 60)}...`
                      : product.Description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-800">
                      ${product.Price.toFixed(2)}
                    </p>
                    <button onClick={() =>  addToCart(product)} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
                     Add to Cart
                    </button>
                    
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
