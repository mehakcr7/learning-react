import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, setCart, setNum, quantitySum }) {
  const total = cart.reduce((sum, item) => sum + item.Price * item.quantity, 0);
  // const quantitySum = cart.reduce((sum, item) => sum + item.quantity,0)
  function additionToCart(product) {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex(
      (item) => item.Name === product.Name
    );
    if (existingProductIndex >= 0) {
      newCart[existingProductIndex].quantity += 1;
    }
    setCart(newCart);
    setNum(quantitySum);
  }
  function subtractFromCart(product) {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex(
      (item) => item.Name === product.Name
    );
    if (existingProductIndex >= 0 && newCart[existingProductIndex].quantity > 1) {
      newCart[existingProductIndex].quantity -= 1;
    } else {
      newCart.splice(existingProductIndex, 1);
    }
    setCart(newCart);
    setNum(quantitySum);
  }
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Your cart is empty!</p>
          <Link
            to="/"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Products
            {setNum(quantitySum)}
          </Link>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 px-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center">
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.Name}
                    </h2>
                    <p className="text-gray-500">
                      ${item.Price.toFixed(2)} x {item.quantity} = $
                      {(item.Price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-gray-500">${item.Price.toFixed(2)}</p>
                  </div>
                </div>

               
                <div className="px-1 flex items-center gap-4 py-1 bg-blue-500 text-white text-sm rounded-lg ">
                <button
                  onClick={() => additionToCart(item)}
                  className="px-3 py-1  rounded-lg  hover:bg-blue-600 transition"
                >
                  +
                </button>
                {item.quantity}   
                <button onClick={()=> subtractFromCart(item)}  className="px-3 py-1   rounded-lg  hover:bg-blue-600 transition">
                  -  
                </button>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button> 
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold text-gray-800">
              Total: ${total.toFixed(2)}
              {setNum(quantitySum)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
