import { ProductCard } from "../../common/productCard/ProductCard";

export const Productos = ({ hello, goodbye }) => {
  return (
    <section>
      <h2> {hello} </h2>
      <h2> {goodbye} </h2>
      <ProductCard title="Producto 1" price="Precio: $1000" stock="Stock: 3" />;
      <ProductCard title="Producto 2" price="Precio: $2000" stock="Stock: 5" />;
      <ProductCard title="Producto 3" price="Precio: $3000" stock="Stock: 7" />;
    </section>
  );
};
