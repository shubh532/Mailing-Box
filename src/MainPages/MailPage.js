import { useSelector } from "react-redux";
import { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import MailingBox from "../MailComponents/MailingBox";
import Style from "./MailPage.module.css"
import Button from "react-bootstrap/Button"
import axios from "axios";
import Row from "react-bootstrap/esm/Row";

function MailPage() {
    const Message = useSelector(state => state.SendReducer.Message)

    const GetRecievermailID = useRef()
    const GetSubject = useRef()

    function GetTimeAndDate() {
        let currentDate = new Date();
        let currentTime = currentDate.toLocaleTimeString();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();
        return {
            Time: currentTime,
            Date: currentDay + "/" + currentMonth + "/" + currentYear
        }
    }
   



    const SendMailHandler = async () => {

        let email = GetRecievermailID.current.value
        email = email.replace(/[.]/g, "")
        email = email.replace(/[@]/g, "")
        const TimeDate = GetTimeAndDate()

        try {
            const Response = await axios.post(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox/${email}.json`, {
                Reciever: GetRecievermailID.current.value,
                Subject: GetSubject.current.value,
                Message: Message,
                TimeDate:TimeDate
            })
            if (Response.status === 200) {
                alert("Email Send...")

            }
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <Container className={`${Style.MainContainer} bg-light`}>
            <Row>
                <div className={Style.InputContainer}>
                    <input type="email" ref={GetRecievermailID} placeholder="To" />
                    <input type="text" ref={GetSubject} placeholder="Subject" />
                </div>
            </Row>

            <MailingBox />
            <Row className={`p-3 ${Style.BtnRow}`}>
                <Button onClick={SendMailHandler} variant="primary">Send</Button>
            </Row>
        </Container>
    )
}

export default MailPage