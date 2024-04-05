import { useCallback, useEffect } from "react";
import NavBar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./Components/SignUp";
import "./App.css"
import Container from "react-bootstrap/esm/Container";
import RoutePage from "./MainPages/RoutePage";
import useFetch from "./CustomHooks/useFetch";
import { SendMailActions } from "./Redux Store/MailHandler";
import SideBar from "./MailComponents/SideBar";;

function App() {

  const isLogin = useSelector(state => state.AuthReducer.isLogin)
  const ShowSideNav = useSelector(state => state.SideBarBtnFunc.ShowSideNav)
  const Dispatch = useDispatch()

  let email = localStorage.getItem("Email")
  if (email) {
      email = email.replace(/[.@]/g, "")
  }

  const InboxMails = useFetch(`https://mailboxauth-default-rtdb.firebaseio.com/receiver/${email}.json`)
  const InboxHandler=useCallback(()=>{
    Dispatch(SendMailActions.GetReceivermail(InboxMails.Data))
  },[InboxMails,Dispatch])
  useEffect(() => {
    InboxHandler()
  }, [InboxHandler])

  return (
    
    <Container fluid className={`Container`}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          {!isLogin?<SignUp />:<Redirect to="/main-page/inbox"/>}
        </Route>
        <Route path="/main-page">
          {isLogin ? <RoutePage /> : <Redirect to="/" />}
        </Route>
      </Switch>
      {ShowSideNav&&<SideBar/>}
    </Container>
  );
}

export default App;
