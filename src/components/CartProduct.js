import { Button } from "react-bootstrap";
import { cartcontext } from "../cartcontext";
import { useContext } from "react";
import { getProductData } from "../productsArr";

function CartProduct(props) {
    const cart = useContext(cartcontext);
    const {id, quantity} = props;
    const productData = getProductData(id);
    if (!productData) {
        return <p>Product data not available.</p>;
    }

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )

}

export default CartProduct;