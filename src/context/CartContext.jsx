import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCart] = useState([]);
    
    const addItem = (producto) => {
        
    let exist = carrito.find((item) => item.id === producto.id);

    if (exist) {
        let newCart = carrito.map((item) => {
            if (item.id === producto.id) {
                return { ...item, quantity: item.quantity + producto.quantity };
            } else {
                return item;
            }
        });
        setCart(newCart);
    } else {
        setCart([...carrito, producto]);
}};


        //método utilizado cuando se necesita agregar un nuevo producto al carrito pero no se puede utilizar el método push.
        //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array. Lo hago en cambio es utilizar el método setCart para agregar un nuevo producto al carrito.


    const resetCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        let newCart = carrito.filter((item) => item.id !== id);
        setCart(newCart);
    };

const getTotal = () => {
    let total = carrito.reduce((acumulador, item) => {
    return acumulador + item.price * item.quantity;
    }, 0);

    return total;
};

const totalItems = () => {
    let total = carrito.reduce((acumulador, item) => {
    return acumulador +  item.quantity;
    }, 0);

    return total;
};
    let data = { carrito, addItem, resetCart, removeItem, getTotal, totalItems };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext