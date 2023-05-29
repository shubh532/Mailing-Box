import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Inbox.module.css";
import Mail from "./Mail";
import { SendMailActions } from "../Redux Store/MailHandler";
function Inbox() {
    let email = useSelector(state => state.AuthReducer.email)
    if (email) {
        email = email.replace(/[.]/g, "")
        email = email.replace(/[@]/g, "")
    }
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
                        Mails.unshift({
                            id: key,
                            Message: Response.data[key].Message,
                            Subject: Response.data[key].Subject,
                            Sender: Response.data[key].Sender,
                            Reciever: Response.data[key].Reciever,
                            TimeDate: Response.data[key].TimeDate,
                            ReadStatus: Response.data[key].ReadStatus,
                        })
                    }
                    Dispatch(SendMailActions.GetReceivermail(Mails))
                }
            } catch (err) {
                console.log(err)
            }
        }
        GetMails()
    }, [Dispatch])

    const ReadMessagehandler = async (mail, id) => {
        if (mail.ReadStatus === false) {
            const ReadMail = {
                Message: mail.Message,
                Reciever: mail.Reciever,
                Sender: mail.Sender,
                Subject: mail.Subject,
                TimeDate: mail.TimeDate,
                ReadStatus: true
            }
            try {
               const Response= await axios.put(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox/${email}/${id}.json`, ReadMail)
            } catch (err) {
                console.log(err)
            }
        }

    }

    return (
        <div className={Style.Inbox}>
            {ReceiveMails.map(mails => {
                return (
                    <Mail key={mails.id}
                        id={mails.id}
                        Message={mails.Message}
                        Reciever={mails.Reciever}
                        Sender={mails.Sender}
                        Subject={mails.Subject}
                        TimeDate={mails.TimeDate}
                        ReadStatus={mails.ReadStatus}
                        ReadMessagehandler={ReadMessagehandler.bind(null, mails, mails.id)} />
                )
            })
            }
        </div>
    )
}

export default Inbox;