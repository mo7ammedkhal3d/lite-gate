import React, { useState,useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{},
});

export const AuthContextProvider =(props)=> {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect (()=>{
        const storeUserLoggedInformation = localStorage.getItem('isLoggedIn');
    
        if(storeUserLoggedInformation === '1'){
          setIsLoggedIn(true);
        }
      },[]);

    const loginHandler = ()=>{
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
    }

    const logoutHandler = ()=>{
        localStorage.removeItem('isloggedIn');
        setIsLoggedIn(false);
    }

    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogin:loginHandler}}>
        {props.children}
    </AuthContext.Provider>;
}

export default AuthContext;