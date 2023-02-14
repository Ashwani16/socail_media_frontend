import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/posts/action";

export const AddPost=()=>{
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>{
        return state.userReducer;
    })
    const [post,setPost]=useState({title:"",body:"",device:""})
    function changeHandler(e){
        setPost((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
function clickHandler(){
    console.log({...post,token})
    dispatch(addPost({...post,token}))
}

    return <div>
        <h1>Add Posts</h1>
        <input placeholder="Title" name="title" value={post.title} onChange={changeHandler}/><br/>
        <input placeholder="body" name="body" value={post.body} onChange={changeHandler}/><br/><br/><br/>
        <input placeholder="device" name="device" value={post.device} onChange={changeHandler}/><br/>
        <button onClick={clickHandler} >Submit</button>

    </div>
}