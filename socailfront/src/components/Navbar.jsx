import { Link } from "react-router-dom"

export const Navbar=()=>{
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">Sign-Up</Link>
        <Link to="/post/add">Add Post</Link>
    </div>
}