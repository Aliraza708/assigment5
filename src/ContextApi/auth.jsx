import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../authFirbase";



export const authContext = createContext()

function AuthContextProvider({children}){

    const [users,SetUser]=useState()
 
    onAuthStateChanged(auth,(user)=>{
        if(user){
            SetUser(user?.email)
        }else{
            null
        }
       
    })

    return(
        <authContext.Provider value={{users}}>
        {children}
    </authContext.Provider>
    )
}

export default AuthContextProvider
