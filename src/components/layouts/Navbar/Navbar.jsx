import { CarritoCompras } from "../../pages/cart/CarritoCompras";
import "./Navbar.css";
import photo from "../../../assets/images/messi.jpg";
import { Link } from "react-router";

export const Navbar = () => {
  // Espacio de Javascript

  console.log("Hola desde el Navbar");
  let hombre = "Juan";
  let trabajadores = {
    nombre: "Juan",
    edad: 30,
    nombreDeEmpresa: "Google",
    puesto: "Desarrollador",
  };
  const { nombre, edad, nombreDeEmpresa: empresa, puesto } = trabajadores;
  console.log(empresa);

  // Fin del espacio de Javascript

  return (
    <nav>
      <h2>Doggy</h2>

      <img src={photo} alt="El hombre más sexy de la historia" />

      {console.log(hombre)}

      <div className="links">
        <ul>
          <li>
            <Link to="/products">Home</Link>
          </li>
          <li>
            <Link to="/category/adulto">Comida para Perro Adulto</Link>
          </li>
          <li>
            <Link to="/category/cachorro">Comida para Perro Adulto</Link>
          </li>
          <li>
            <Link to="/Users">Contact Us:</Link>
          </li>
          <li>
            <Link to="/Comments">About Us:</Link>
          </li>
        </ul>
      </div>

      <CarritoCompras />
    </nav>
  );
};
