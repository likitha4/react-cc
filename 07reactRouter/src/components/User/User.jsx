import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid}=useParams()
    
    return (
        <div className="text-4xl m-14 p-40 bg-yellow-200 text-red-600"> 
            User:{userid}
        </div>
    )

}

