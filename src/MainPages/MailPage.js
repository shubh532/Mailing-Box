import { useSelector } from "react-redux";
import { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import MailingBox from "../MailComponents/MailingBox";
import Style from "./MailPage.module.css"
import Button from "react-bootstrap/Button"
import axios from "axios";

function MailPage() {
    const Message = useSelector(state => state.SendReducer.Message)

    const GetRecievermailID = useRef()
    const GetSubject = useRef()



    const SendMailHandler = async () => {

        let email = GetRecievermailID.current.value
        email = email.replace(/[.]/g, "")
        email = email.replace(/[@]/g, "")

        try {
            const Response = await axios.post(`https://mailbox-d39a9-default-rtdb.firebaseio.com/sent/${email}.json`, {
                Reciever: GetRecievermailID.current.value,
                Subject: GetSubject.current.value,
                Message: Message
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
            <div className={Style.InputContainer}>
                <input type="email" ref={GetRecievermailID} placeholder="To" />
                <input type="text" ref={GetSubject} placeholder="Subject" />
            </div>
            <MailingBox />

            <Button onClick={SendMailHandler} variant="primary">Send</Button>
        </Container>
    )
}

export default MailPage