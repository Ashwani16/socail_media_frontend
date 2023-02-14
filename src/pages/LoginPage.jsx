import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { login } from "../redux/user/action"

export const LoginPage=()=>{
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const {token,loading}=useSelector((state)=>{
        return state.userReducer
    })
function clickHandler(){
    console.log(name,password)
    dispatch(login({name,password}))
}
const navigate=useNavigate()

useEffect(()=>{
    if(token){
        navigate("/")
    }
},[token])
    return <div>
        <h1>{token}</h1>
        <h1>Log In</h1>
        <input placeholder="Name"  onChange={(e)=>{setName(e.target.value)}} value={name}/>
        <input placeholder="enter password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={clickHandler} >{loading?"...":"Submit"}</button>
    </div>
}