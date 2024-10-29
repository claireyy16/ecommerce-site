import '../styles/navbar.css';
import { Col, Button, Navbar, Nav, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react';
import { cartcontext } from '../cartcontext';
import CartProduct from './CartProduct';

function NavBarComponent () {
    const cart = useContext(cartcontext);
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        console.log("checkout!");
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); //forward to stripe!
            }
        })
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
        <Navbar expand="sm">
        <Navbar.Brand href='/'>claire's crochet!</Navbar.Brand>
        <Nav className="me-auto"> 
            <Nav.Link href='/'>home</Nav.Link>
            <Nav.Link href="store">store</Nav.Link>
            <Nav.Link href='aboutme'>about me</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart: ({productsCount} Items)</Button>
        </Navbar.Collapse>
        </Navbar>
        <Modal style={{}} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Shopping Cart</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ? 
                        <>
                            <p>Items in your cart!</p>
                            <hr/>
                            {cart.items.map((item) => (
                                <Col align="center" key={item.id}> {/* Use item.id as the key */}
                                    <CartProduct id={item.id} quantity={item.quantity} /> {/* Pass id and quantity as props */}
                                </Col>
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success" onClick={checkout}> 
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>no items!</h1>
                    }
                </Modal.Body>
        </Modal>
        </>
    )
}

export default NavBarComponent;