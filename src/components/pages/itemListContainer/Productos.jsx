import { ProductCard } from "../../common/productCard/ProductCard";
import "./Productos.css";
import React, { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";

export const Productos = () => {
  const [item, setItem] = useState([]); // Estado para almacenar los productos
  const { name } = useParams();

  useEffect(() => {
    //Filtranmos por nombre de la categoría:
    //const filteredProducts = products.filter(
    // (product) => product.category === name
    //);

    const tomarProductos = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(
          name
            ? products.filter((product) => product.category === name)
            : products
        );
      } else {
        reject("No tienes permisos para ver los productos");
      }
    });

    tomarProductos
      .then((data) => {
        console.log("Productos obtenidos:", data);
        setItem(data); // Guardamos los productos en el estado
      })
      .catch((error) => console.error("Error:", error));
  }, [name]);

  return (
    <section className="productos">
      <h2>Productos</h2>
      {item.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

/*{
  item.map((item) => (
    <div key={item.id} className="product-card">
      <h2>{item.title}</h2>
      <h3>Precio: ${item.price}</h3>
      <h4>Stock: {item.stock}</h4>
    </div>
  ));
}*/
