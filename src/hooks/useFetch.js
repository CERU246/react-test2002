/*
//function: retorna javascript object 
export const Sumar = (a, b) => {
    return a + b;
}

console.log(Sumar(2, 3));

//components: son funciones que retornan un JSX/HMTL
export const Saludar = () => {
    return <h1>Hola Mundo</h1>
}

console.log(Saludar());

//hooks: son funciones que retornan un valor de cualquier tipo (string, number, object, array, etc)
export const useFetch = () => {
    return "Hola Mundo";
}*/

import { useEffect, useState } from "react";

export const useFetch = (url, initialValue = []) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        //fetch: función que recibe como parámetro la URL de la API que queremos consumir. En este caso, la API de Mercado Libre.
    const getData  =  fetch(url)
    setTimeout(() => {   
    getData 
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => setError({ status: 404,  message: "Ocurrió un error en el Servidor. Estamos trabajando en ello" }))
        .finally(() => setLoading(false)); 
            }, 3000);
    }, [url]);

    return { data, loading, error };
}
