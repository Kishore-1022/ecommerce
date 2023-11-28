import React,{useState} from "react";
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}, 
    
})

export  const AuthContextProvider=(props)=>{
    
    const initialValue=localStorage.getItem('token');
    const [token,setToken]=useState(initialValue)

    const  userIsLoggedIn=!!token;
   

    
    const loginHandler=(token)=>{
       setToken(token)
       localStorage.setItem('token', token);
       setTimeout(()=>{
        alert('Session Expired!')
        logoutHandler()
       },5*60*1000)
    }
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token');
     }
     const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        logout:logoutHandler,
        login:loginHandler, 
     }

    return (
        <AuthContext.Provider value={contextValue}>
           {props.children }
        </AuthContext.Provider>
    )    
    
}
export default AuthContext