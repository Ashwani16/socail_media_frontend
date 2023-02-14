import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../redux/posts/action"

export const HomePage=()=>{
    const dispatch=useDispatch()
    const token=useSelector((state)=>{
        return state.userReducer.token
    })
    const {posts,loading,err}=useSelector((state)=>{
        return state.postsReducer
    })
    useEffect(()=>{
       
        dispatch(getPosts(token))
    },[])
    function logout(){
        dispatch({type:"reset"})
    }
    return <div>
        <h1>Home Page</h1>
        <button onClick={logout}>Log-Out</button>
        {loading&&<h1>Loading</h1>}
        <div className="main-post">
        {posts.length>0 && posts.map((e)=>{
            return <div className="post-card" key={e._id}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <p>{e.device}</p>
            </div>
        })}
        </div>
        
    </div>
}