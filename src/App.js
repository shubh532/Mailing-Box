import NavBar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./Components/SignUp";
import "./App.css"
import HomePage from "./MainPages/Home";
import Container from "react-bootstrap/esm/Container";
import MailPage from "./MainPages/MailPage";

function App() {

  const isLogin=useSelector(state=>state.AuthReducer.isLogin)
  const MsgSend=useSelector(state=>state.SendReducer.Done)

  return (
    <Container fluid className={`Container`}>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <SignUp/>
        </Route>
        <Route path="/home">
        {isLogin?<HomePage/>:<Redirect to="/"/>}
        </Route>
        <Route path="/product">
        {isLogin?<MailPage/>:<Redirect to="/"/>}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
