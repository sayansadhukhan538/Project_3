/* eslint-disable react/prop-types */
import { useContext } from "react"
import AuthContext from "../context/auth.context"
import { Navigate } from "react-router-dom";


const GuestGuard = ({children}) => {
    const {isAuthenticate} = useContext(AuthContext);
    if(isAuthenticate){
        return(<Navigate to='/dashboard'/>)
    }
  return (
    <div>{children}</div>
  )
}

export default GuestGuard