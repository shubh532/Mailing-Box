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
import { memo } from "react";

function RoutePage() {
    console.log("ROUTE PAGE")
    const isLogin = useSelector(state => state.AuthReducer.isLogin)
    return (
        <>
            {isLogin ? <Row className="custom-row RowCompo">
                <Col xs={2} className="p-0 sidebarrow">
                    <SideBar />
                </Col>
                <Switch>
                    <Route path="/main-page/inbox" exact>
                        <Col xs={10} className="p-2 mailpagerow">
                            <Inbox />
                        </Col>
                    </Route>
                    <Route path="/main-page/sent" exact>
                        <Col xs={10} className="p-2 mailpagerow">
                            <SentBox />
                        </Col>
                    </Route>
                    <Route path="/main-page/compose-mail" >
                        <Col xs={10} className="p-2 mailpagerow">
                            <MailPage />
                        </Col>
                    </Route>
                    <Route path="/main-page/:mailBoxes/:mailId">
                        <Col xs={10} className="p-2 mailpagerow">
                            <ShowMail />
                        </Col>
                    </Route>
                </Switch>
            </Row> : <Redirect to="/" />}
        </>
    )
}

export default memo(RoutePage);