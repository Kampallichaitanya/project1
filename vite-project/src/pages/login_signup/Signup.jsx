import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Style from "./Signup.module.css";

const Signup = () => {
const [name,setname] = useState();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const onSubmit=async(e)=>{
    try{
      const sendSign=await fetch(`http://localhost:3000/user/Signup`,{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
      const response = await sendSign.json
      if(sendSign.ok){
        alert("registration successful");
      }
        else{
          alert("registration failed");
        }
      
    } catch(error){
      console.log("error");
  }
}

  return (
    <div>
      <div>
      <h1 className={Style.hello}>Signup</h1>
    <div>
      <input type="text" name="" id="" placeholder="username" onChange={(e) =>setname(e.target.value)}/>
      
      <input type="text" name="" id="" placeholder="email"     onChange={(e)=>setemail(e.target.value)}/>
  
      <input type="text" name="" id="" placeholder="password"onChange={(e)=>setpassword(e.target.value)}/>
      
      <button onClick={onSubmit} type="submit">
        submit 
        </button>
      <div>
        <p>
          already a member?<Link to="/">login</Link>
        </p>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Signup;
