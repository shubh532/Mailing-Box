import Checkbox from '@mui/material/Checkbox'
import Style from "./Mail.module.css"
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';


function Mail() {
    const [Hover, SetHover] = useState(false)

    const OnMouseHover = () => {
        SetHover(true)
    }
    const OnMouseNotHover = () => {
        SetHover(false)
    }



    return (
        <div className={Style.MailContainer} onMouseLeave={OnMouseNotHover} onMouseOver={OnMouseHover}>
            <div className={Style.SenderInfo}>
                <Checkbox defaultChecked />
                <StarBorderPurple500OutlinedIcon fontSize='small' />
                <span className={Style.Name}>Shubham Mahulkar</span>
            </div>
            <div className={Style.MailContent}>
                <div className={Style.SubjetSpan}>Testing Email Content</div>
                <div className={Style.ContentSpan}>- Testing Email sdkjfsj sdffs fsdhfkjdf fdf fdkjdf kdfn  ContentTesting Email sdkjfsj sdffs fsdhfkjdf fdf fdkjdf kdfn  ContentTesting Email sdkjfsj sdffs fsdhfkjdf fdf fdkjdf kdfn  ContentTesting Email sdkjfsj sdffs fsdhfkjdf fdf fdkjdf kdfn  Content</div>
                {!Hover&&<div className={Style.TimeBlock}>12:06AM</div>}
                {Hover && <div className={Style.HoverBtns}><button><DeleteSharpIcon /></button> <button><ArchiveIcon /></button> </div>}
            </div>
        </div>
    )
}
export default Mail;