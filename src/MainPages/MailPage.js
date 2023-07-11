import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import ReactDraft from "../MailComponents/ReactDraft";
import Style from "./MailPage.module.css"
import Button from "react-bootstrap/Button"
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import { SendMailActions } from "../Redux Store/MailHandler";

function MailPage() {
    const Message = useSelector(state => state.SendReducer.Message)
    const sendMail = useSelector(state => state.SendReducer.SendMails)

    const Dispatch = useDispatch()
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
        let SenderMail = localStorage.getItem("Email")
        const TimeDate = GetTimeAndDate()
        const Mail = {
            Reciever: GetRecievermailID.current.value,
            Sender: SenderMail,
            Subject: GetSubject.current.value,
            Message: Message,
            TimeDate: TimeDate,
            ReadStatus: false,
        }
        let RecieverEmail = GetRecievermailID.current.value
        RecieverEmail = RecieverEmail.replace(/[.@]/g, "")
        try {
            const Response = await axios.post(`https://mailboxauth-default-rtdb.firebaseio.com/receiver/${RecieverEmail}.json`, Mail)
            if (Response.status === 200) {
                console.log(Response)
                SenderMail = SenderMail.replace(/[.@]/g, "")
                console.log(SenderMail)
                const Response2 = await axios.post(`https://mailboxauth-default-rtdb.firebaseio.com/Sender/${SenderMail}.json`, Mail)
                if (Response2.status === 200) {
                    alert("Email Send...")
                    const SendMail = [...sendMail]
                    SendMail.push({
                        Sender: SenderMail,
                        Reciever: GetRecievermailID.current.value,
                        Subject: GetSubject.current.value,
                        Message: Message,
                        TimeDate: TimeDate
                    })
                    Dispatch(SendMailActions.GetSendMail(SendMail))

                }
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

            <ReactDraft />
            <Row className={`p-3 ${Style.BtnRow}`}>
                <Button onClick={SendMailHandler} variant="primary">Send</Button>
            </Row>
        </Container>
    )
}

export default MailPage