import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./Comments.css";

const Comments = () => {
const { data: comentarios, loading } = useFetch("https://jsonplaceholder.org/comments");
console.log(loading);
return (
  <div>
    {loading ? (
      <div className="pacman-loader">
        <PacmanLoader color="blue" size={50} />
      </div>
    ) : (
      <div>
        {comentarios.map((comentario) => {
          return (
            <div key={comentario.id} style={{ marginBottom: "20px" }}>
              <p>{comentario.comment}</p>
            </div>
          );
        })}
      </div>
    )}
    ;
  </div>
);
};
//El backend programa endpoints para que el frontend pueda hacer peticiones a la base de datos
//El frontend hace una petición al backend para obtener los datos

export default Comments;
