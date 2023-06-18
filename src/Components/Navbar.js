import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthActions } from "../Redux Store/Authentication.js"
import { Avatar } from '@mui/material';
import stringAvatar from '../UIComponent/bgColorGenerator.js';

function NavBar() {

    const redirectPage = useHistory()
    const IsLogin = useSelector(state => state.AuthReducer.isLogin)
    const Dispatch = useDispatch()

    function LogoutHandler() {
        Dispatch(AuthActions.LogOut())
        redirectPage.replace("/")
        localStorage.removeItem("TokenID")
        localStorage.removeItem("Email")
    }
    return (
        <Navbar bg="dark" expand="lg" variant='dark' className="fixed-top p-0">
            <Container>
                <Navbar.Brand as={Link} to="/main-page/inbox">Mailing Box</Navbar.Brand>

                <Nav className="me-auto">
                    {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/product">Products</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link> */}
                </Nav>
                <Nav className="m-0">
                    {IsLogin && <Nav.Link as={Link} to="/"><Avatar {...stringAvatar("Shubham Mahulkar")}></Avatar></Nav.Link>}
                    {!IsLogin && <Nav.Link as={Link} to="/">Login</Nav.Link>}
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;