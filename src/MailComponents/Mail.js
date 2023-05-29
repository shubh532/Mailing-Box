import Checkbox from '@mui/material/Checkbox'
import Style from "./Mail.module.css"
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';


function Mail(props) {
    const [Hover, SetHover] = useState(false)

    const Message= props.Message.replace(/<[^>]+>/g, '')

    const OnMouseHover = () => {
        SetHover(true)
    }
    const OnMouseNotHover = () => {
        SetHover(false)
    }


    return (
        <div className={Style.MailContainer} onMouseLeave={OnMouseNotHover} onMouseOver={OnMouseHover}>
            <div className={Style.SenderInfo}>
                <Checkbox  />
                <StarBorderPurple500OutlinedIcon fontSize='small' />
                <span className={Style.Name}>{props.Sender}</span>
            </div>
            <div className={Style.MailContent}>
                <div className={Style.SubjetSpan}>{props.Subject}</div>
                <div className={Style.ContentSpan}>- {Message}</div>
                {!Hover && <div className={Style.TimeBlock}>{props.TimeDate.Time}</div>}
                {Hover && <div className={Style.HoverBtns}><button><DeleteSharpIcon /></button> <button><ArchiveIcon /></button> </div>}
            </div>
        </div>
    )
}
export default Mail;