import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Style from "./SideBar.module.css"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StarIcon from '@mui/icons-material/Star';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SendIcon from '@mui/icons-material/Send';
import ArchiveIcon from '@mui/icons-material/Archive';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

function SideBar() {
    const [ActiveTab, SetActiveTab] = useState("inbox")

    const ActiveTabHandler = useCallback((tabName) => {
        SetActiveTab(tabName)
    },[])
    const UnReadMails = useSelector(state => state.SendReducer.receiveMail)
    let UnreadMailNum = 0
    UnReadMails&&UnReadMails.forEach(mails => {
        if (mails.ReadStatus === false) {
            UnreadMailNum += 1
        }
    })

    return (
        <div className={Style.Container}>
            <div className={Style.ComposeBtn}>
                <Link onClick={() => { ActiveTabHandler(null) }} to="/main-page/compose-mail" >+Compose</Link>
            </div>
            <div className={Style.SideNavBar}>
                <Link style={ActiveTab === "inbox" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/inbox" onClick={() => { ActiveTabHandler("inbox") }} >
                    <AllInboxIcon />
                    <span>Inbox</span>
                    <Badge color="primary" badgeContent={UnreadMailNum} max={999} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}></Badge>
                </Link>
                <Link style={ActiveTab === "Unread" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/unread" onClick={() => { ActiveTabHandler("Unread") }}>
                    <MarkEmailUnreadIcon />
                    <span>Unread</span>
                </Link>
                <Link style={ActiveTab === "Starred" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/starred" onClick={() => { ActiveTabHandler("Starred") }}>
                    <StarIcon />
                    <span>Starred</span>
                </Link>
                <Link style={ActiveTab === "Draft" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/draft" onClick={() => { ActiveTabHandler("Draft") }}>
                    <EditCalendarIcon />
                    <span>Draft</span>
                </Link>
                <Link style={ActiveTab === "Sent" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/sent" onClick={() => { ActiveTabHandler("Sent") }}>
                    <SendIcon />
                    <span>Sent</span>
                </Link>
                <Link style={ActiveTab === "Archive" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/archive" onClick={() => { ActiveTabHandler("Archive") }}>
                    <ArchiveIcon />
                    <span>Archive</span>
                </Link>
                <Link style={ActiveTab === "Spam" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/spam" onClick={() => { ActiveTabHandler("Spam") }}>
                    <WarningSharpIcon />
                    <span>Spam</span>
                </Link>
                <Link style={ActiveTab === "Deleted" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/deleted-items" onClick={() => { ActiveTabHandler("Deleted") }}>
                    <DeleteSharpIcon />
                    <span>Deleted Items</span>
                </Link>
                <Link style={ActiveTab === "Photos" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/photos" onClick={() => { ActiveTabHandler("Photos") }}>
                    <PhotoSizeSelectActualIcon />
                    <span>Photos</span>
                </Link>
                <Link style={ActiveTab === "Video" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/videos" onClick={() => { ActiveTabHandler("Video") }}>
                    <VideoLibraryIcon />
                    <span>Video</span>
                </Link>
                <Link style={ActiveTab === "Documents" ? { backgroundColor: "rgb(87, 95, 102)" } : {}} to="/main-page/documents" onClick={() => { ActiveTabHandler("Documents") }}>
                    <TextSnippetIcon />
                    <span>Documents</span>
                </Link>
            </div>


        </div>
    )
}

export default SideBar;