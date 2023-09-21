import React from "react"
import { NavLink } from "react-router-dom"

export const SignUp=()=>{
    return (
        <div className="insideBox insideRight">
            <h1>SignUp</h1>
            <NavLink style={{textDecoration:"none"}} to="/"><a href="" style={{color:"#005980",textDecoration:"none"}}>点此登陆</a></NavLink>
        </div>
    )
}