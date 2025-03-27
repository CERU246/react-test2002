import { ProductCard } from "../../common/productCard/ProductCard";
import "./Productos.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebaseconf";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const Productos = () => {
  const [item, setItem] = useState([]); // Estado para almacenar los productos
  const { name } = useParams();

  useEffect(() => {
    let productos = collection(db, "productos");
    const obtenerProductos = getDocs(productos);
    obtenerProductos.
    then((pes) => {
      const nuevoArr = pes.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
            });
      setItem(nuevoArr);
          })
          .catch((error) => console.log("Error:", error));
  }, [name]);

  
          //Filtranmos por nombre de la categoría:
    //const filteredProducts = products.filter(
    // (product) => product.category === name
    //);



/*     const tomarProductos = new Promise((resolve, reject) => {
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
      .catch((error) => console.error("Error:", error)); */
  
/*   const cargar = () => {
    let productos = collection(db, "productos");
    products.forEach(element => {
      addDoc(productos, element);
    });
  }; */
  
  return (
    <section className="productos">
      {/* <button onClick={cargar}>cargar productos</button> */}
      <h2>Productos</h2>
      {item.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })};
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
