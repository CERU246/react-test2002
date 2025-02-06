import { CarritoCompras } from "../../pages/cart/CarritoCompras";
import "./Navbar.css";


export const Navbar = () => {


// Espacio de Javascript

console.log("Hola desde el Navbar");
let hombre = "Juan";
let trabajadores = {
    nombre: "Juan",
    edad: 30,
    nombreDeEmpresa: "Google",
    puesto: "Desarrollador"
}
const {nombre, edad, nombreDeEmpresa: empresa, puesto} = trabajadores;
console.log(empresa);


// Fin del espacio de Javascript

return (
    <nav>
        <h2>Doggy</h2>
        {
            console.log(hombre)
        }
        <div className="links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Products</a></li>
                <li><a href="/blogs">About Us</a></li>
            </ul>
        </div>
        <CarritoCompras />
    </nav>
);
};

