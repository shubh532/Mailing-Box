import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Inbox.module.css";
import Mail from "./Mail";
import { SendMailActions } from "../Redux Store/MailHandler";

// import useDelete from "../CustomHooks/useDelete";
function Inbox() {
    let email = localStorage.getItem("Email")
    if (email) {
        email = email.replace(/[.@]/g, "")
    }
    const ReceiveMails = useSelector(state => state.SendReducer.receiveMail)
    const Dispatch = useDispatch()

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
                await axios.put(`https://mailbox-d39a9-default-rtdb.firebaseio.com/receiver/${email}/${id}.json`, ReadMail)
            } catch (err) {
                console.log(err)
            }
        }

    }
    const DeleteMailHandler = async (id) => {
        const UpdateReceiveMails = ReceiveMails.filter(mails => id !== mails.id)
        Dispatch(SendMailActions.GetReceivermail(UpdateReceiveMails))
        try {
            const Response = await axios.delete(`https://mailbox-d39a9-default-rtdb.firebaseio.com/receiver/${email}/${id}.json`)
            if (Response.status === 200) {
            }
        } catch (err) {
            console.log(err)
        }

    }

    // console.log(ReceiveMails)
    return (
        <div className={Style.Inbox}>
            {ReceiveMails && ReceiveMails.map(mails => {
                return (
                    <Mail key={mails.id}
                        id={mails.id}
                        Message={mails.Message}
                        Reciever={mails.Reciever}
                        Sender={mails.Sender}
                        Subject={mails.Subject}
                        TimeDate={mails.TimeDate}
                        ReadStatus={mails.ReadStatus}
                        path={`/main-page/inbox/${mails.id}`}
                        ReadMessagehandler={ReadMessagehandler.bind(null, mails, mails.id)}
                        DeleteMailHandler={DeleteMailHandler.bind(null, mails.id)} />
                )
            })
            }
        </div>
    )
}

export default Inbox;