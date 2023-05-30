import "../App.css"
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import SideBar from "../MailComponents/SideBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Inbox from "../MailComponents/Inbox";
import MailPage from "./MailPage";
import ShowMail from "../MailComponents/ShowMail";
import SentBox from "../MailComponents/SentBox";

function MainPage() {
    return (
        <Row className="custom-row mt-5">
            <Col xs={2} className="p-0 fixed-top mt-5 sidebarrow">
                <SideBar />
            </Col>
            <Switch>
                <Route path="/product/inbox" exact>
                    <Col xs={10} className="p-2 mailpagerow">
                        <Inbox />
                    </Col>
                </Route>
                <Route path="/product/sent" >
                    <Col xs={10} className="p-2 mailpagerow">
                        <SentBox />
                    </Col>
                </Route>
                <Route path="/product/compose-mail" >
                    <Col xs={10} className="p-2 mailpagerow">
                        <MailPage />
                    </Col>
                </Route>
                <Route path="/product/inbox/:mailId">
                    <Col xs={10} className="p-2 mailpagerow">
                        <ShowMail />
                    </Col>
                </Route>
                <Route path="/product/sent/:mailId">
                    <Col xs={10} className="p-2 mailpagerow">
                        <ShowMail />
                    </Col>
                </Route>
            </Switch>
        </Row >
    )
}

export default MainPage;