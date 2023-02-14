import { useState } from "react"
import { useDispatch } from "react-redux";
import { rgeister } from "../redux/user/action";

export const RegisterPage=()=>{
    const dispatch=useDispatch()
    const [details,setDetails]=useState({name:"",email:"",gender:"",password:""})
    let {name,email,gender,password}=details;
    function changeHandler(e){
        setDetails((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    function submitHandler(){
        console.log(details)
        dispatch(rgeister(details))
    }
    return <div>
        <h1>Registration Page</h1>
        <input placeholder="enter name" name="name" value={name} onChange={changeHandler}/><br/>
        <input name="email" placeholder="enter your emai" value={email} onChange={changeHandler}/><br/>
        <select name="gender" value={gender} onChange={changeHandler}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select><br/>
        <input name="password" placeholder="enter your password" value={password} onChange={changeHandler}/><br/>
        <button onClick={submitHandler}>Submit</button>
    </div>
}
//name,email,gender,password