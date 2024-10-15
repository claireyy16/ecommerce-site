import { Card, Button, Form, Row, Col, Image } from 'react-bootstrap';


function ProductCard(props) {

    const product = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Img as={Image} src={"../assets/test.jpg"} alt={"product text"}></Card.Img>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;