import { Button, Navbar, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react';
import { cartcontext } from '../cartcontext';

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
        <Navbar.Brand href='/'>crochet store!</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart: ({productsCount} Items)</Button>
        </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
                <Modal.Body>
                    {productsCount > 0 ? 
                        <>
                            <p>Items in your cart!</p>
                            {cart.items.map((currentProduct, idx) => (
                                <h1 key={idx}>{currentProduct.title}</h1>
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
            </Modal.Header>
        </Modal>
        </>
    )
}

export default NavBarComponent;