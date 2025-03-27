import { Link } from "react-router";
import "./ProductCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <h3>{item.title}</h3>
      <h3>{item.price}</h3>
      <h3>{item.stock}</h3>
      <img src={item.imageUrl} alt={item.title} />
      <Link to={`/detalleItem/${item.id}`}>Ver detalle</Link>
    </div>
  );
};  

