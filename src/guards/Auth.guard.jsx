/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../context/auth.context";
import { Navigate } from "react-router-dom";


const AuthGuard = ({children}) => {
    const {isAuthenticate} = useContext(AuthContext);
    if(!isAuthenticate){
        return(<Navigate to='/'/>)
    }
  return (
    <>
    {children}
    </>
  )
}

export default AuthGuard;