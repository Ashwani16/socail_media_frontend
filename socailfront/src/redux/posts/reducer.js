import { ADD_POST_ERR, ADD_POST_SUCC, GET_POST_ERR, GET_POST_SUCC, SET_POST_LOADING } from "./actionTypes"

const initial_state={
    posts:{},
    loading:false,
    err:false
}
const reducer=(state=initial_state,{payload,type})=>{
    switch (type) {
        case GET_POST_SUCC:{
            return {...state,loading:false,posts:payload}
        }
        case GET_POST_ERR:{
            return {...state,loading:false,err:true}
        }
        case SET_POST_LOADING:{
            return {...state,loading:payload}
        }
        case ADD_POST_SUCC:{
            return {...state,posts:[...state.posts,payload],loading:false}
        }
        case ADD_POST_ERR:{
            return {...state,loading:false,err:true}
        }
    
        default:{
            return state
        }
    }
}
export { reducer}