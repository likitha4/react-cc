

import React,{useState,useContext} from "react";

import UserContext from "../context/UserContext";

import "../App.css"

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    //object
    const {setUser}= useContext(UserContext)
    const handleSubmit=()=>{
        e.preventDefault()
        setUser({username, password})
    }




    return(
        <div>
            <h2>Login</h2>
            <input type='text' placeholder="username" className="inp" value={username} onChange={(e)=>setUsername(e.target.value)} />
            
            <input type='text' placeholder="password"   className="inp" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;