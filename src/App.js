import NavBar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./Components/SignUp";
import "./App.css"
import HomePage from "./MainPages/Home";
import Container from "react-bootstrap/esm/Container";
import MailPage from "./MainPages/MailPage";
import SideBar from "./MailComponents/SideBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App() {

  const isLogin = useSelector(state => state.AuthReducer.isLogin)
  const MsgSend = useSelector(state => state.SendReducer.Done)

  return (
    <Container fluid className={`Container`}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/home">
          {isLogin ? <HomePage /> : <Redirect to="/" />}
        </Route>
        <Route path="/product">
          {isLogin ? <Row className="custom-row mt-5">
            <Col xs={2} className="p-0 fixed-top mt-5 sidebarrow">
              <SideBar />
            </Col>
            <Col  xs={10} className="p-2 mailpagerow">
              <MailPage />
            </Col>
          </Row> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
