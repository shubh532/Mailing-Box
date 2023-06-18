import "../App.css"
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SideBar from "../MailComponents/SideBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Inbox from "../MailComponents/Inbox";
import MailPage from "./MailPage";
import ShowMail from "../MailComponents/ShowMail";
import SentBox from "../MailComponents/SentBox";

function MainPage() {
    const isLogin = useSelector(state => state.AuthReducer.isLogin)
    return (
        <Row className="custom-row RowCompo">
            <Col xs={2} className="p-0 sidebarrow">
                {isLogin ? <SideBar /> : <Redirect to="/" />}
            </Col>
            <Switch>
                <Route path="/main-page/inbox" exact>
                    <Col xs={10} className="p-2 mailpagerow">
                        {isLogin ? <Inbox /> : <Redirect to="/" />}
                    </Col>
                </Route>
                <Route path="/main-page/sent" exact>
                    <Col xs={10} className="p-2 mailpagerow">

                        {isLogin ? <SentBox /> : <Redirect to="/" />}
                    </Col>
                </Route>
                <Route path="/main-page/compose-mail" >
                    <Col xs={10} className="p-2 mailpagerow">
                        {isLogin ? <MailPage /> : <Redirect to="/" />}
                    </Col>
                </Route>
                <Route path="/main-page/:mailBoxes/:mailId">
                    <Col xs={10} className="p-2 mailpagerow">
                        {isLogin ? <ShowMail /> : <Redirect to="/" />}
                    </Col>
                </Route>
            </Switch>
        </Row >
    )
}

export default MainPage;