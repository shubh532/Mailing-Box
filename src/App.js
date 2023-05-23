import NavBar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./Components/SignUp";
import "./App.css"
import HomePage from "./MainPages/Home";
import Container from "react-bootstrap/esm/Container";

function App() {

  const Authenction=useSelector(state=>state.AuthReducer)


  return (
    <Container fluid className={`Container`}>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <SignUp/>
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
