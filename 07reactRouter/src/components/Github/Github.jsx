import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
export default function Github(){
const data=useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/likitha4')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])

    return(
        <div className="text-center m-4 bg-blue-300 text-green-800 p-6 text-4xl">
            Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" height="300" width="200"></img>
        </div>

    )
}
export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/likitha4')
    return response.json()
}