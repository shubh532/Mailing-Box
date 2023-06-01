import Checkbox from '@mui/material/Checkbox'
import Style from "./Mail.module.css"
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Badge } from '@mui/material';

function Mail(props) {
    const [Hover, SetHover] = useState(false)
    const Message = props.Message.replace(/<[^>]+>/g, '')

    const OnMouseHover = () => {
        SetHover(true)
    }
    const OnMouseNotHover = () => {
        SetHover(false)
    }

    return (
        <div className={Style.MailContainer} onMouseLeave={OnMouseNotHover} onMouseOver={OnMouseHover}>
            <Link to={props.path} onClick={props.ReadMessagehandler}>
                <div className={Style.SenderInfo} >
                    <Checkbox />
                    {!props.ReadStatus && <Badge color="primary" variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}>
                        <span className={Style.Name}>{props.Sender}</span>
                    </Badge>}
                    {props.ReadStatus && <span >{props.Sender}</span>}

                </div>
                <div className={Style.MailContent}>
                    <div className={props.ReadStatus ? Style.MAilRead : Style.SubjetSpan}>{props.Subject}</div>
                    <div className={Style.ContentSpan}>- {Message}</div>
                </div>
            </Link>
            {!Hover && <div className={Style.TimeBlock}>{props.TimeDate.Time}</div>}
            {Hover && <div className={Style.HoverBtns}>
                <button onClick={props.DeleteMailHandler}><DeleteSharpIcon fontSize='small' /></button>
                <button><ArchiveIcon fontSize='small' /></button> </div>}
        </div>
    )
}
export default Mail;