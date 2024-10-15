import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react';
import { cartcontext } from '../cartcontext';

function NavBarComponent () {
    const cart = useContext(cartcontext);
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
        <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
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
                                <h1>{currentProduct.id}</h1>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success"> 
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