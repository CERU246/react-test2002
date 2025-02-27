import { Link } from "react-router";


export const ProductCard = ({ item }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <h3> {item.stock} </h3>
      <h3>
        <img src={item.imageUrl} alt={item.title} />
      </h3>
      <Link to={`/detalleItem/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

