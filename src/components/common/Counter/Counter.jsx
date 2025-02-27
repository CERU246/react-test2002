// En React no solemos utilizar variables, sino que, al igual que en Angular, utilizamos estados.
// Para ello, necesitamos importar useState de React. Aunque exiten muchas propiedades que podemos utilizar, por ejemplo: useEffect, useContext, useCallback, useMemo.
//El useState siempre me devuelve un array con dos elementos, el primero es el valor del estado y el segundo es una función que me permite modificar el estado.
// Al no poder modificar variables, utilizamos la función setCount para modificar el estado count, es decir, el valor de la variable count.

import React, { useState , useEffect } from "react";

const Counter = ({ darkMode }) => {
  // Fórmula:  const [count, setCount] = useState(0);

  const [numero, setNumero] = useState(0);

  const restar = () => {
    setNumero(numero - 5);
  };

  const sumar = () => {
    setNumero(numero + 5);
  };

  console.log("Se renderizó el componente");

  useEffect(() => {
    console.log("Se montó el componente");
  }, [sumar, darkMode]); // Si no le pasamos nada, se ejecuta cada vez que se renderiza el componente

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h2>{numero}</h2>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
