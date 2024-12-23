import { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { use } from 'react';
import { useState } from 'react'


function App() {
  const [length,setLength]=useState("8");
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charallowed,steCharAllowed]=useState(false);
  const[password,setpassword]=useState("");

  // useref hook
  const passwordKaRefrence=useRef(null);

  //function that will generate the password

  const passwordGenerator=useCallback(()=>{
      
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed){
        str+="1234567890"
      }
      if(charallowed){
        str+="~!@#$%^&*(){}[]"
      }

      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char)
      
      }
      setpassword(pass)
      

  },[length,numberAllowed,charallowed])

  // useEffect(()=>{
  //   passwordGenerator()
  // },[length,numberAllowed,charallowed])

  const copykaropasswordkoClipboardpr=useCallback(()=>
  {
    passwordKaRefrence.current?.select(password)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-2xl">Password Genrator
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordKaRefrence}
          />
          <button className='outline-none bg-blue-500 text-white
          px-3 py-0.5 shrink-0'
          onClick={copykaropasswordkoClipboardpr}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>setNumberAllowed((prev)=>!prev)}
             />
             <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox"
            defaultChecked={charallowed}
            onChange={()=>steCharAllowed((prev)=>!prev)}
             />
             <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='bg-blue-500  text-black outline-dashed mb-2'
          onClick={passwordGenerator}>Click to generate</button>
        </div>
      </div>
    </>
  )
}

export default App
