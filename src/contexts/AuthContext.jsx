import { useState,useEffect,useContext,createContext } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../services/firebase";

//create a new context
const AuthContext = createContext(); //this will hold the auth context and allows sharing globally

//createas a provider that wrap part of the app that need to access that context
export const  AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null) //the data that needs to be accessed globally within the auth context
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    },[])
  return (
    //wrap children with the provider and pass the currentUser object as it value
    <AuthContext.Provider value={{currentUser}}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

//create a hook to access the context easily from any component
export const UseAuthContext = () => {
    return useContext(AuthContext); //gives you the auth context
}
