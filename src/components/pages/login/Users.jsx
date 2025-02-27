//El backend programa endpoints para que el frontend pueda hacer peticiones a la base de datos
//Esto lo realiza a través de una API. La API es un conjunto de reglas que permite que dos aplicaciones se comuniquen entre sí. Fetching de datos.

// const {data, loading} =
import { useFetch } from "../../../hooks/useFetch";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./Users.css";

// fetch("https://api.mercadolibre.com/sites/MLA/search?q=celular");
//El fetch es una función que recibe como parámetro la URL de la API que queremos consumir. En este caso, la API de Mercado Libre.

const Users = () => {
  const { data: usuarios, loading } = useFetch(
    "https://jsonplaceholder.org/users"
  );

  return (
    <div>
      {loading ? (
        <div className="pacman-loader">
          <PacmanLoader color="blue" size={50} />
        </div>
      ) : (
        <div>
          {usuarios.map((usuario) => {
            return (
              <div key={usuario.id}>
                <h3>{usuario.name}</h3>
                <p>Email: {usuario.email}</p>
                <p>Ciudad: {usuario.address.city}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  // const [user, setUser] = useState ([]);

  // const conseguirUsuarios = fetch ("https://jsonplaceholder.org/users");

  // useEffect(() => {
  // conseguirUsuarios.then((res) => res.json()).then((res) => setUser(res));
  // }, []);

  /*El problema de utilizar "FETCH" es que debo utilizar un doble .then. Uno uno para manejar la promesa y convertirla en un ".json" y la 2da es para acceder a la respuesta que ese 1er método me devuelve */

  /* /*error && <h2>{error.message}</h2> */
};

export default Users;
