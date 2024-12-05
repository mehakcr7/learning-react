import React, { useState } from "react";
import Navbar from "../../Navbar";

function Main() {
  const [num, setNum] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function addToCart() {
    setNum(num + 1);
  }

  const products = [
    {
      Name: "Chocolate Cake",
      Price: 15.99,
      Image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-delightful-chocolate-cake-half-kg--190813-m.jpg",
      Description:
        "A rich and moist chocolate cake topped with smooth chocolate ganache.",
    },
    {
      Name: "Vanilla Cupcake",
      Price: 3.49,
      Image:
        "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/the-best-vanilla-cake.jpg",
      Description: "A fluffy vanilla cupcake with creamy buttercream frosting.",
    },
    {
      Name: "Blueberry Muffin",
      Price: 2.99,
      Image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Wild-Blueberry-Muffins_EXPS_FTTMZ19_787_B03_05_7b_rms.jpg",
      Description:
        "A delicious muffin packed with fresh blueberries for a fruity burst.",
    },
    {
      Name: "Multigrain Bread",
      Price: 4.49,
      Image:
        "https://preview.redd.it/hdagdtpbeylz.jpg?auto=webp&s=b2fa69fcf0460925edfd2007810f31f762009fb5",
      Description:
        "A healthy and hearty multigrain bread, perfect for any meal.",
    },
    {
      Name: "Cheesecake Slice",
      Price: 5.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A creamy and tangy cheesecake slice with a buttery graham cracker crust.",
    },
  ];

  return (
    <div>
      <Navbar Num={num} />
      <div className="flex justify-center flex-wrap gap-5 p-4">
        {selectedProduct ? (
          <div className="group border border-gray-300 p-4 rounded-lg w-48 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-72">
              <img
                src={selectedProduct.Image}
                alt={selectedProduct.Name}
                className="w-full h-36 object-cover rounded-t-md"
              />
              <h3 className="text-lg font-semibold mt-2">
                {selectedProduct.Name}
              </h3>
              <p className="text-gray-600 text-sm">
                <strong>Price:</strong> ${selectedProduct.Price}
              </p>
              <p className="text-gray-500 text-sm">
                {selectedProduct.Description}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <button className="border rounded-lg bg-red-400 cursor-pointer"
                onClick={() => setSelectedProduct(null)}
                
              >
                Back to Products
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart();
                }}
                className="border rounded-lg bg-yellow-400 cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="border rounded-lg bg-orange-400 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="group border border-gray-300 p-4 hover:cursor-pointer rounded-lg w-48 shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-72">
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="w-full h-36 object-cover rounded-t-md"
                />
                <h3 className="text-lg font-semibold mt-2 group-hover:text-blue-700">
                  {product.Name}
                </h3>
                <p className="text-gray-600 text-sm">
                  <strong>Price:</strong> ${product.Price}
                </p>
                <p className="text-gray-500 text-sm">{product.Description}</p>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart();
                  }}
                  className="border rounded-lg bg-yellow-400 cursor-pointer"
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="border rounded-lg bg-orange-400 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
