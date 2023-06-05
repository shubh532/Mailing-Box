import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [Data, SetData] = useState(null)
    const [Loader,SetLoader]=useState(false)

    useEffect(() => {
        async function GetMails() {
            console.log("running")
            SetLoader(true)
            try {
                const Response = await axios.get(url)
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
                    SetData(Mails)
                    SetLoader(false)
                }
            } catch (err) {
                console.log(err)
                SetLoader(false)

            }
        }
        GetMails()
        const intervalId=setInterval(GetMails,2000)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [url])
    return {Data, Loader}
}
export default useFetch;