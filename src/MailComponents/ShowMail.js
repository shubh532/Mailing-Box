import Style from "./Showmail.module.css"
import { Avatar } from "@mui/material";
import stringAvatar from "../UIComponent/bgColorGenerator";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import DOMPurify from 'dompurify';

function ShowMail() {

    const mailId = useParams()
    const ReceiveMails = useSelector(state => state.SendReducer.receiveMail)
    const Mail = ReceiveMails.find((mail) => mail.id == mailId.mailId)

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    let email = Mail.Sender.replace(/[^A-Za-z]+/g, '')

    return (
        <div className={Style.Container}>
            <div className={Style.Header}>
                <h3>{Mail.Subject}</h3>
            </div>
            <div className={Style.infoContainer}>
                <div className={Style.Avatar} >
                    <Avatar {...stringAvatar(`${email}`)}></Avatar>
                </div>
                <div className={Style.info}>
                    <div className={Style.NameContainer}>
                        <h6>{Mail.Sender}</h6>
                        <div className={Style.PrintAndTime}>
                            <span><LocalPrintshopIcon fontSize="small" /></span>
                            <span>{Mail.TimeDate.Date},{Mail.TimeDate.Time}</span>
                        </div>
                    </div>
                    <div className={Style.userInfo}>
                        <div>
                            <span className={Style.From}>From:</span>
                            <span className={Style.Sender}>{Mail.Sender}</span>
                        </div>
                        <div>
                            <span className={Style.To}>To:</span>
                            <span className={Style.Receiver}>{Mail.Reciever}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.MailContainer} dangerouslySetInnerHTML={createMarkup(Mail.Message)}>

            </div>
        </div>
    )
}

export default ShowMail;