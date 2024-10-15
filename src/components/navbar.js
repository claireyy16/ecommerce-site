import { Button, Container, Navbar, Modal } from 'react-bootstrap'

function NavBarComponent () {
    return (
        <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button>0</Button>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;