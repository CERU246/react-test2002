import "./CarritoCompras.css";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export const CarritoCompras = () => {
  const { carrito, resetCart, removeItem, getTotal } = useContext(CartContext);

  let total = getTotal();

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>
      <div className="carrito-items">
        {carrito.map((item) => (
          <div className="carrito-item" key={item.id}>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>x{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <span className="carrito-total">Total: ${total}</span>

      <div className="carrito-buttons">
        <button
          className="vaciar"
          onClick={() => {
            Swal.fire({
              title: "¿Estás seguro?",
              text: "Esta acción vaciará todo tu carrito.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#d33",
              cancelButtonColor: "#3085d6",
              confirmButtonText: "Sí, vaciar",
              cancelButtonText: "Cancelar",
            }).then((result) => {
              if (result.isConfirmed) {
                resetCart();
                Swal.fire(
                  "Carrito vacío",
                  "Tu carrito ha sido vaciado.",
                  "success"
                );
              }
            });
          }}
        >
          Vaciar Carrito
        </button>

        <Link to="/checkout">
          <button className="checkout">Terminar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default CarritoCompras;
