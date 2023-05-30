import CircularProgress from '@mui/material/CircularProgress';
import PositionStyle from "./Loader.module.css"

export default function Spinner() {
    return (
        <div className={PositionStyle.Loader}><CircularProgress /></div>
    )


}