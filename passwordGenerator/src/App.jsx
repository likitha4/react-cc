import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")

// useRef hook
const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str=str+"0123456789"
    if(charAllowed) str=str+"~@#$%^&}!+1*=_`"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length+1)
      console.log(char,"character",pass,"password");
      pass +=str.charAt(char)
    }

    setPassword(pass)  

  },[length,numberAllowed,charAllowed, setPassword])



  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
        window.navigator.clipboard.writeText(password)},[password])
  // passwordGenerator()
  useEffect(()=>{passwordGenerator()},
  [length,charAllowed,numberAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-600 text-white'>
    <h1 className='text-4xl text-center text-yellow-100'>Password Generator</h1>

    <div className='className=" flex shadow rounded-lg overflow-hidden mb-4"'>
      
    <input type="text" value={password} className='outline-none-w-full py-3 px-2 my-1 rounded-lg  text-black' placeholder='Password' readOnly ref={passwordRef}></input>
    <button onClick={copyPasswordToClipBoard} className='outline-none bg-white-600 text-black gap-x-3 px-3 py-1.5 shrink-0'>Copy</button>

</div>
<div className='flex text-md gap-x-3'>
  <div className="flex items-center gap-x-2">
    <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
    <label >Length:{length}</label>
  </div>
  
<div className='flex text-md gap-x-4'>
  <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
<label htmlFor='numberInput'>Numbers</label>
</div>

<div className='flex text-md gap-x-3'>
  <input type='checkbox' defaultChecked={numberAllowed} id="characterInput" onChange={()=>{
    setCharAllowed((count)=>!count)}}/>
<label htmlFor='characterInput'>Characters</label>
</div>
</div>
</div>
    </>
  )
}

export default App
