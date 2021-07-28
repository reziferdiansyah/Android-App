import React, { useState } from "react"
import FormLogin from "./formLogin"
import FormRegister from "./formRegister"
function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const handleLoginview = () => {
        setIsLogin(!isLogin)
    }
    return isLogin ? (
        <FormLogin handleLoginview={handleLoginview} />) : (
        <FormRegister handleLoginview={handleLoginview} />
    )
}

export default Login