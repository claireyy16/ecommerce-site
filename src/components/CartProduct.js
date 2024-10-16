import { Button } from "react-bootstrap";
import { cartcontext } from "../cartcontext";
import { useContext } from "react";
import { getProductData } from "../productsArr";

function CartProduct(props) {
    const cart = useContext(cartcontext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart}>Remove</Button>
            <hr></hr>
        </>
    )

}

export default CartProduct;