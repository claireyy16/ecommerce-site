import '../styles/card.css';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { cartcontext } from '../cartcontext';
import { useContext } from 'react';

import yellowCowImage from '../assets/yellow-cow.jpg';
import loveCowImage from '../assets/love-cow.jpg';
import spidermanImage from '../assets/spiderman.jpg';

const images = {
  'yellow': yellowCowImage,
  'love': loveCowImage,
  'spiderman': spidermanImage,
};


function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(cartcontext);
    const productQuantity = cart.getProductQuantity(product.id);
    const productImage = images[product.image];

    return (
        <Card>
            <Card.Body className>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Img variant="top" src={productImage} alt={product.title} className="prodImg card-img" />
                <hr/>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
        
    )
}

export default ProductCard;