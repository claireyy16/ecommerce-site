import "../styles/styles.css";
import "../styles/cartProd.css"
import { Button } from "react-bootstrap";
import { cartcontext } from "../cartcontext";
import { useContext } from "react";
import { getProductData } from "../productsArr";

function CartProduct(props) {
    const cart = useContext(cartcontext);
    const {id, quantity} = props;
    console.log("ID passed to CartProduct:", id);
    const productData = getProductData(String(id));
    if (!productData) {
        return <p>Product data not available.</p>;
    }

    return (
        <>
            <div className="product-grid">           
            <h3>{productData.title}</h3>
            <div className="product-field"> 
                <p>each: ${productData.price}</p>
                <p>total: {quantity}</p>
            </div>
            <div className="product-field">
                <p>${(quantity * productData.price).toFixed(2)}</p> 
                <Button className="button" size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            </div>
            </div>
            <hr />
        </>
    )

}

export default CartProduct;