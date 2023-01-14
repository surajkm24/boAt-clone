import { Route, Routes } from "react-router-dom"
import { ForgotPassword } from "../Pages/ForgotPassword"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Signup } from "../Pages/Signup"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/change-password' element={<ForgotPassword />} />
        </Routes>
    )
}