import React, { useState } from "react";
import Navbar from "../../Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function Main() {
  const [num, setNum] = useState(0);
  const [cart, setCart] = useState([]);
  const quantitySum = cart.reduce((sum, product) => sum + product.quantity,0)

  // Example of adding an item to the cart with a quantity
  const addToCart = (product) => {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex(
      (item) => item.Name === product.Name
    );

    if (existingProductIndex >= 0) {
      // If the product is already in the cart, increase the quantity
      newCart[existingProductIndex].quantity += 1;
    } else {
      // If it's not in the cart, add it with quantity 1
      newCart.push({ ...product, quantity: 1 });
    }
    setNum(quantitySum)
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // alternative method for removing................

  // const removeFromCart = (index) => {
  //   setCart(cart.filter((_, i) => i !== index)); // Removes the item at the given index
  // };

  const products = [
    {
      id: 1,
      Name: "Chocolate Cake",
      Price: 15.99,
      Image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-delightful-chocolate-cake-half-kg--190813-m.jpg",
      Description:
        "A rich and moist chocolate cake topped with smooth chocolate ganache.",
    },
    {
      id: 2,
      Name: "Vanilla Cupcake",
      Price: 3.49,
      Image:
        "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/the-best-vanilla-cake.jpg",
      Description: "A fluffy vanilla cupcake with creamy buttercream frosting.",
    },
    {
      id: 3,
      Name: "Blueberry Muffin",
      Price: 2.99,
      Image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Wild-Blueberry-Muffins_EXPS_FTTMZ19_787_B03_05_7b_rms.jpg",
      Description:
        "A delicious muffin packed with fresh blueberries for a fruity burst.",
    },
    {
      id: 4,
      Name: "Multigrain Bread",
      Price: 4.49,
      Image:
        "https://preview.redd.it/hdagdtpbeylz.jpg?auto=webp&s=b2fa69fcf0460925edfd2007810f31f762009fb5",
      Description:
        "A healthy and hearty multigrain bread, perfect for any meal.",
    },
    {
      id: 5,
      Name: "Cheesecake Slice",
      Price: 5.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A creamy and tangy cheesecake slice with a buttery graham cracker crust.",
    },
    {
      id: 6,
      Name: "Chocolate Brownie",
      Price: 4.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A rich, fudgy chocolate brownie with a gooey center and a crispy top.",
    },
    {
      id: 7,
      Name: "Tiramisu Cup",
      Price: 6.49,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A classic Italian dessert layered with mascarpone cream and espresso-soaked ladyfingers.",
    },
    {
      id: 8,
      Name: "Lemon Tart",
      Price: 5.49,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A tangy lemon curd-filled tart with a buttery shortbread crust.",
    },
    {
      id: 9,
      Name: "Red Velvet Cupcake",
      Price: 3.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A moist red velvet cupcake topped with smooth cream cheese frosting.",
    },
    {
      id: 10,
      Name: "Macaron Assortment",
      Price: 7.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A collection of delicate macarons in a variety of flavors and colors.",
    },
    {
      id: 11,
      Name: "Blueberry Muffin",
      Price: 3.49,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A fluffy muffin bursting with sweet blueberries and a hint of vanilla.",
    },
    {
      id: 12,
      Name: "Carrot Cake Slice",
      Price: 4.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description:
        "A moist carrot cake slice filled with spices and topped with cream cheese frosting.",
    },
    {
      id: 13,
      Name: "Chocolate Chip Cookie",
      Price: 2.99,
      Image:
        "https://tse4.mm.bing.net/th?id=OIP.Heo1kjvHKq4L24GYYqsz_AHaE8&pid=Api&P=0&h=180",
      Description: "A classic chewy cookie loaded with gooey chocolate chips.",
    },
  ];

  return (
    <Router>
      <div>
        <Navbar Num={num} />
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                setNum={setNum}
                setCart={setCart}
                quantitySum ={quantitySum}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
