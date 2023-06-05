import { useState } from "react";
import axios from "axios";

async function useDelete(url,data,id){
    const [Data, Update]=useState(null)
    console.log("RUN")
    
    try {
        const Response = await axios.delete(url)
        if (Response.status === 200) {
            //Do Something
            const UpdateData = data.filter(mails => id !== mails.id)
            Update(UpdateData)
        }
    } catch (err) {
        console.log(err)
    }
    return Data
}
export default useDelete