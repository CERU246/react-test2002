import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../layouts/counter/Counter";
import { db } from "../../../firebaseconf";
import { collection, doc, getDoc } from "firebase/firestore";
import "./DetalleItem.css";


const DetalleItem = () => {
  const [item, setItem] = useState({});

  // let id = "1"; // id del producto a mostrar

  const { id } = useParams(); // hook de react-router-dom que permite obtener los parámetros de la URL. Siempre devuelve un objeto.
  console.log(id);

  useEffect(() => {
    let productos = collection(db, "productos");
    let refProdc = doc(productos, id);

    const obtenerProductos = getDoc(refProdc);
    obtenerProductos
      .then((pes) => {
        setItem({ id: pes.id, ...pes.data() });
      })
      .catch((error) => console.log("Error:", error));
  }, [id]);

  return (
    <div className="detalle-item">
      <h3>{item.title}</h3>
      <h3>{item.price}</h3>
      <h3>{item.stock}</h3>
      <img src={item.imageUrl} alt={item.title} />
      <Counter item={item} />
      <button>Comprar ahora</button>
    </div>
  );
};

export default DetalleItem;  