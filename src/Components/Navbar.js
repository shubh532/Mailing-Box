import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand as={NavLink} to="/home">Mailing Box</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                    <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;