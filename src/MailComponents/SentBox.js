import { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Inbox.module.css";
import Mail from "./Mail";
import { SendMailActions } from "../Redux Store/MailHandler";
import Spinner from "../UIComponent/Loader";

function SentBox() {
    const [Loader, SetLoader] = useState(false)
    let email = useSelector(state => state.AuthReducer.email)
    if (email) {
        email = email.replace(/[.]/g, "")
        email = email.replace(/[@]/g, "")
    }
    const SendMails = useSelector(state => state.SendReducer.receiveMail)
    const Dispatch = useDispatch()

    useEffect(() => {
        async function GetMails() {
            try {
                SetLoader(true)
                const Response = await axios.get(`https://mailbox-d39a9-default-rtdb.firebaseio.com/MailBox.json`)
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
                    Dispatch(SendMailActions.GetSendMail(Mails))
                    SetLoader(false)
                }
            } catch (err) {
                console.log(err)
                SetLoader(false)
            }
        }
        GetMails()
    }, [Dispatch])

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

    // }
    return (
        <div className={Style.Inbox}>
            {!Loader&&SendMails.map(mails => {
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
                        // ReadMessagehandler={ReadMessagehandler.bind(null, mails, mails.id)}
                        // DeleteMailHandler={DeleteMailHandler.bind(null, mails.id)} 
                        />
                )
            })
            }
            {Loader&&<Spinner/>}
        </div>
    )
}

export default SentBox;