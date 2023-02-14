import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import { AddPost } from "./pages/AddPost"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute> }/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/post/add" element={<PrivateRoute><AddPost/></PrivateRoute>} />
    </Routes>
}