import { BsCart4 } from "react-icons/bs";
import "./CarritoCompras.css";

export const CarritoCompras = () => {
  return (
    <section>
      <h1>Carrito de Compras</h1>
      <div>
        <BsCart4 id="carro"/>
        <span id="carritocompra">0</span>
      </div>
    </section>
  );
};
