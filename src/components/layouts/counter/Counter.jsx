import { useState, useEffect } from "react";
import { ImInsertTemplate } from "react-icons/im";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const { addItem } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > counter) {
      setCounter(counter + 1);
    } else {
      alert("No hay más stock disponible");
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const onAdd = () => {
    let iqc = { ...item, quantity: counter };
    addItem(iqc);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{counter}</span>
      <button onClick={sumar}>+</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
