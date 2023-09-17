/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = (props)=>{
    const navigate = useNavigate();
    const {children} = props;
    const [isAuthenticate, setAuthenticate] = useState(false);
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'));
        if(token){
            setAuthenticate(true);
        }
    },[]);

    const logOut = ()=>{
        localStorage.removeItem('token');
        toast.success('Log Out done', {
            duration: 4000,
          });
          navigate('/');
        
    }

    return <AuthContext.Provider value={{isAuthenticate, setAuthenticate,logOut}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext;
