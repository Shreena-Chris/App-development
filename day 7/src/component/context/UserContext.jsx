import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();
const useUser=()=>{
    return useContext(UserContext);

}
const UserProvider=({children})=>{
    const[isUserLoggedIn,setisUserLoggedIn]=useState(false);
    const login=()=>{
        setisUserLoggedIn(true);
    }
    const logout=()=>{
        setisUserLoggedIn(false);
    }
    const userValue=useMemo( ()=>(
        {
            isUserLoggedIn,login,logout
        }

    ),[isUserLoggedIn])
    
    return(
        <UserContext.Provider value = {userValue}>
            {children}
        </UserContext.Provider>   
         )
}