import React from "react";

function ProductDetails({addToCart,RemoveFromCart}) {
  const product = {
    name: "Awesome Gadget",
    details: "This is an awesome gadget with amazing features.",
    image: "https://via.placeholder.com/150",
    price: "$49.99",
  };
  return (
    <div className="p-6 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-48 h-48 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.details}</p>
      <p className="text-lg font-semibold mb-4">{product.price}</p>
      <button onClick={addToCart}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
      <br />
      <button onClick={RemoveFromCart}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default ProductDetails;
