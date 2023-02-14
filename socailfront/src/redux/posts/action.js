import axios from "axios"
import { url } from "../../config/config"
import { ADD_POST_ERR, ADD_POST_SUCC, GET_POST_ERR, GET_POST_SUCC, SET_POST_LOADING } from "./actionTypes"

const Set_Post_Loading=(payload)=>{
    return {
        type:SET_POST_LOADING,
        payload
    }
}
const Get_Post_Succ=(payload)=>{return{type:GET_POST_SUCC,payload}}
const Get_Post_Err=(payload)=>{return{type:GET_POST_ERR}}
const Add_Suc=(payload)=>{return{type:ADD_POST_SUCC,payload}}
const Add_Err=(payload)=>{return{type:ADD_POST_ERR}}
export const getPosts=(token)=>(dispatch)=>{
    dispatch(Set_Post_Loading(true))
    axios.get(`${url}/posts`,{headers:{token}}).then((res)=>{
        console.log(res.data)
        dispatch(Get_Post_Succ(res.data))
    }).catch((err)=>{
        console.log("error in get posts reqest");
        dispatch(Get_Post_Err())
    })
}
export const addPost=({title,body,device,token})=>(dispatch)=>{
    axios.post(`${url}/posts/add`,{
        title,body,device
    },{headers:{token}}).then((res)=>{
        console.log(res)
        //dispatch(getPosts(token))
    }).catch((err)=>{
        console.log(err)
    })
    
}