import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../../products";


const DetalleItem = () => {
  const [item, setItem] = useState({});

  // let id = "1"; // id del producto a mostrar

  const { id } = useParams(); // hook de react-router-dom que permite obtener los parámetros de la URL. Siempre devuelve un objeto.
  console.log(id);

  useEffect(() => {
    let product = products.find((objeto) => objeto.id === id);
    setItem(product);
  }, [id]);

  return (
    <div>
      <h3>{item.title}</h3>
      <h3>{item.price}</h3>
      <h3>{item.stock}</h3>
      <img src={item.imageUrl} alt={item.title} />
      <button>Agregar al carrito</button>
      <button>Comprar ahora</button>
    </div>
  );
};

export default DetalleItem;
