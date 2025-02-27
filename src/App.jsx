import React, { useState } from "react";
import { Footer } from "./components/layouts/Footer/Footer";
import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Productos } from "./components/pages/itemListContainer/Productos";
// import { Counter } from "./components/common/Counter/Counter";
import Comments from "./components/pages/login/Comments";
import Users from "./components/pages/login/Users";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import DetalleItem from "./components/pages/DetalleItem/detalleItem";

function App() {
  // const [darkMode, setDarkMode] = useState(false); // Fórmula:  const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Productos />} />
        <Route path="/category/:name" element={<Productos />} />
        <Route path="/category/:id/:subId" element={<Productos />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/detalleItem/:id" element={<DetalleItem />} />
        <Route path="*" element={<h2> 404 Error: Not Found </h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
