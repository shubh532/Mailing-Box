import Style from "./Inbox.module.css";
import Mail from "./Mail";
function Inbox(){

    let X=[]
    for(let i=0;i<=120; i++){
        X.push(<Mail/>)
    }
    return(
        <div className={Style.Inbox}>
            {X.map(item=>{
                return(
                    <Mail/>
                )
            })}
        </div>
    )
}

export default Inbox;