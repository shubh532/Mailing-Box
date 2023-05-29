import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Inbox.module.css";
import Mail from "./Mail";
import { SendMailActions } from "../Redux Store/MailHandler";
function Inbox() {
    let email = useSelector(state => state.AuthReducer.email)

    console.log(email)

    const SendMail = useSelector(state => state.SendReducer.SendMails)
    const ReceiveMails = useSelector(state => state.SendReducer.receiveMail)
    const Dispatch = useDispatch()

    useEffect(() => {
        async function GetMails() {
            try {

                email = email.replace(/[.]/g, "")
                email = email.replace(/[@]/g, "")
                const Response = await axios.get(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox/${email}.json`)
                if (Response.status === 200) {
                    const Mails = []
                    for (const key in Response.data) {
                        Mails.push({
                            id: key,
                            Message: Response.data[key].Message,
                            Subject: Response.data[key].Subject,
                            Sender: Response.data[key].Sender,
                            Reciever: Response.data[key].Reciever,
                            TimeDate: Response.data[key].TimeDate
                        })
                    }
                    Dispatch(SendMailActions.GetReceivermail(Mails))
                    console.log(Response)
                    console.log(ReceiveMails, "recies")
                }
            } catch (err) {
                console.log(err)
            }
        }
        GetMails()
    }, [Dispatch])

    return (
        <div className={Style.Inbox}>
            {ReceiveMails.map(mails => {
                return (
                    <Mail key={mails.id}
                    Message={mails.Message}
                    Reciever={mails.Reciever}
                    Sender={mails.Sender}
                    Subject={mails.Subject}
                    TimeDate={mails.TimeDate} />
                )
            })
            }
        </div>
    )
}

export default Inbox;