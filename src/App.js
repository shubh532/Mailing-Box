import NavBar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
// import { Fragment } from "react";
import "./App.css"
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Container fluid className={`Container`}>
      <NavBar />
      <SignUp />
    </Container>
  );
}

export default App;
