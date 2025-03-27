import { useState } from "react";
import "./Checkout.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseconf";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const {carrito, getTotal, resetCart} = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
  e.preventDefault();
  let total = getTotal();
  let colecciones = collection(db, "orders");
  let order = { 
    buyer: formData, 
    items: carrito, 
    total };

  let promCompra = addDoc(colecciones, order);
  promCompra.then((docRef) =>{ setOrderId(docRef.id); 
  resetCart();
});

let coleccionProductos = collection(db, "productos");

order.items.forEach((element) => {
  let docRef = doc(coleccionProductos, element.id);
  updateDoc(docRef, {
    stock: element.stock - element.quantity,
  })
});

};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      {orderId ? (
        <p>
          {" "}
          Gracias por tu compra. Tu número de orden es:{" "}
          <strong>{orderId}</strong>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="checkout-buttons">
            <button className="submit" type="submit">
              Enviar
            </button>
            <button
              className="reset"
              type="reset"
              onClick={() =>
                setFormData({ name: "", email: "", phone: "", address: "" })
              }
            >
              Limpiar
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Checkout;
