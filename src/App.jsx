import React, { useState } from "react";
import { Footer } from "./components/layouts/Footer/Footer";
import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Productos } from "./components/pages/itemListContainer/Productos";
// import { Counter } from "./components/common/Counter/Counter";
import Comments from "./components/pages/login/Comments";
import Users from "./components/pages/login/Users";
import { BrowserRouter, Routes, Route } from "react-router";
import DetalleItem from "./components/pages/DetalleItem/detalleItem";
import Checkout from "./components/pages/CheckOut/Checkout";
import  CarritoCompras from "./components/pages/cart/CarritoCompras";
import CartWidget from "./components/common/cartWidget/CartWidget";
import { CartProvider } from "./context/CartContext";

function App() {
  // const [darkMode, setDarkMode] = useState(false); // Fórmula:  const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Productos />} />
          <Route path="/category/:name" element={<Productos />} />
          <Route path="/category/:id/:subId" element={<Productos />} />
          <Route path="/carrito" element={<CarritoCompras />} />
          <Route path="/cartwidget" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/detalleItem/:id" element={<DetalleItem />} />
          <Route path="*" element={<h2> 404 Error: Not Found </h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
