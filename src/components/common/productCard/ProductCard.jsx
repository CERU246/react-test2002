export const ProductCard = ({ title, price, stock}) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3> {title} </h3>
      <h3> {price} </h3>
      <h3> {stock} </h3>
      <h3>
        Descrpción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        harum
      </h3>
    </div>
  );
};

