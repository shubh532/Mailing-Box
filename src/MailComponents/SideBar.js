import { Link } from "react-router-dom/cjs/react-router-dom.min";
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

function SideBar() {  

    return (
        <div className={Style.Container}>
            <div className={Style.ComposeBtn}>
                <Link to="/product/compose-mail" >+Compose</Link>
            </div>
            <div className={Style.SideNavBar}>
                <Link to="/product/inbox" ><AllInboxIcon /><span>Inbox</span></Link>
                <Link to="/product/unread"><MarkEmailUnreadIcon /><span>Unread</span></Link>
                <Link to="/product/starred"><StarIcon /><span>Starred</span></Link>
                <Link to="/product/draft"><EditCalendarIcon /><span>Draft</span></Link>
                <Link to="/product/sent"><SendIcon /><span>Sent</span></Link>
                <Link to="/product/archive"><ArchiveIcon /><span>Archive</span></Link>
                <Link to="/product/spam"><WarningSharpIcon /><span>Spam</span></Link>
                <Link to="/product/deleted-items"><DeleteSharpIcon /><span>Deleted Items</span></Link>
                <Link to="/product/photos"><PhotoSizeSelectActualIcon /><span>Photos</span></Link>
                <Link to="/product/videos"><VideoLibraryIcon /><span>Video</span></Link>
                <Link to="/product/documents"><TextSnippetIcon /><span>Documents</span></Link>
                <Link to="/product/subscription"><SubscriptionsSharpIcon /><span>Subscriptions</span></Link>
                <Link to="/product/deal"><LocalOfferSharpIcon /><span>Deal</span></Link>
                <Link to="/product/travel"><TravelExploreSharpIcon /><span>Travel</span></Link>
            </div>


        </div>
    )
}

export default SideBar;