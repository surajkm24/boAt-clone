import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}