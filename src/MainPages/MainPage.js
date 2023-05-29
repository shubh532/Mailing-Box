import "../App.css"
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import SideBar from "../MailComponents/SideBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Inbox from "../MailComponents/Inbox";
import MailPage from "./MailPage";

function MainPage() {
    return (
        <Row className="custom-row mt-5">
            <Col xs={2} className="p-0 fixed-top mt-5 sidebarrow">
                <SideBar />
            </Col>
            <Switch>
                <Route path="/product/inbox">
                    <Col xs={10} className="p-2 mailpagerow">
                        <Inbox />
                    </Col>
                </Route>
                <Route path="/product/compose-mail">
                    <Col xs={10} className="p-2 mailpagerow">
                        <MailPage />
                    </Col>
                </Route>
            </Switch>
        </Row >
    )
}

export default MainPage;