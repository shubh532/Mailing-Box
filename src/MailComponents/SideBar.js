import { useDispatch } from "react-redux";
import Style from "./SideBar.module.css"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StarIcon from '@mui/icons-material/Star';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SendIcon from '@mui/icons-material/Send';
import ArchiveIcon from '@mui/icons-material/Archive';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { SideBarBtnActions } from "../Redux Store/SideBarBtnFunc";
// import ShowMailCommposer from "../Modal/Modal";



function SideBar() {
    const Dispatch=useDispatch()

    // function ToggleComposeBtn(){
    //     Dispatch(SideBarBtnActions.ShowInboxFunc())
    // }




    return (
        <div className={Style.Container}>
            <div className={Style.ComposeBtn}>
                <button onClick={()=>{Dispatch(SideBarBtnActions.ShowInboxFunc())}}>+Compose</button>
            </div>
            <div className={Style.SideNavBar}>
                    <button><AllInboxIcon /><span>Inbox</span></button>
                    <button><MarkEmailUnreadIcon /><span>Unread</span></button>
                    <button><StarIcon /><span>Starred</span></button>
                    <button><EditCalendarIcon /><span>Draft</span></button>
                    <button><SendIcon /><span>Sent</span></button>
                    <button><ArchiveIcon /><span>Archive</span></button>
                    <button><WarningSharpIcon /><span>Spam</span></button>
                    <button><DeleteSharpIcon /><span>Deleted Items</span></button>
                    <button><PhotoSizeSelectActualIcon /><span>Photos</span></button>
                    <button><VideoLibraryIcon /><span>Video</span></button>
                    <button><TextSnippetIcon /><span>Documents</span></button>
                    <button><SubscriptionsSharpIcon /><span>Subscriptions</span></button>
                    <button><LocalOfferSharpIcon /><span>Deal</span></button>
                    <button><TravelExploreSharpIcon /><span>Travel</span></button>
            </div>


        </div>
    )
}

export default SideBar;