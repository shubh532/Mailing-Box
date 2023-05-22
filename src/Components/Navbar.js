import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">Mailing Box</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#product">Products</Nav.Link>
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;