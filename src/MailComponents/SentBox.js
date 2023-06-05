import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Inbox.module.css";
import Mail from "./Mail";
import { SendMailActions } from "../Redux Store/MailHandler";
import Spinner from "../UIComponent/Loader";
import useFetch from "../CustomHooks/useFetch";

function SentBox() {
    let email = useSelector(state => state.AuthReducer.email)
    if (email) {
        email = email.replace(/[.@]/g, "")
    }
    const SendMails = useSelector(state => state.SendReducer.SendMails)
    const Dispatch = useDispatch()
    let SenderMail = localStorage.getItem("Email")
    SenderMail = SenderMail.replace(/[.@]/g, "")

    const Mails=useFetch(`https://mailbox-d39a9-default-rtdb.firebaseio.com/Sender/${SenderMail}.json`)
    useEffect(()=>{
        Dispatch(SendMailActions.GetSendMail(Mails.Data))
    },[Mails,Dispatch])

    // const ReadMessagehandler = async (mail, id) => {
    //     if (mail.ReadStatus === false) {
    //         const ReadMail = {
    //             Message: mail.Message,
    //             Reciever: mail.Reciever,
    //             Sender: mail.Sender,
    //             Subject: mail.Subject,
    //             TimeDate: mail.TimeDate,
    //             ReadStatus: true
    //         }
    //         try {
    //             await axios.put(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox/${email}/${id}.json`, ReadMail)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    // }
    // const DeleteMailHandler = async (id) => {
    //     const UpdateReceiveMails = ReceiveMails.filter(mails => id !== mails.id)
    //     Dispatch(SendMailActions.GetReceivermail(UpdateReceiveMails))

    //     try {
    //         const Response = axios.delete(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox/${email}/${id}.json`)
    //         if (Response.status === 200) {

    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    //}

    return (
        <div className={Style.Inbox}>
            {SendMails && SendMails.map(mails => {
                return (
                    <Mail key={mails.id}
                        id={mails.id}
                        Message={mails.Message}
                        Reciever={mails.Reciever}
                        Sender={mails.Sender}
                        Subject={mails.Subject}
                        path={`/main-page/sent/${mails.id}`}
                        TimeDate={mails.TimeDate}
                        ReadStatus={true}
                    />
                )
            })
            }
            {Mails.Loader && <Spinner />}
        </div>
    )
}

export default SentBox;