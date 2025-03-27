import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
let compraFinal = totalItems();

    return (
        <div>
            <BsCart4 id="carro"/>
            <span id="carritocompra">{compraFinal}</span>
        </div>
    );
};

export default CartWidget;