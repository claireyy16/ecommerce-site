import { Card, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { cartcontext } from '../cartcontext';
import { useContext } from 'react';

function ProductCard(props) {

    const product = props.product;
    const cart = useContext(cartcontext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {/**<Card.Img as={Image} src={"../assets/test.jpg"} alt={"product text"}></Card.Img>**/}
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;