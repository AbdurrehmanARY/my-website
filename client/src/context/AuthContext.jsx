// const { createContext } = require("react");
import { useToast } from "@/hooks/use-toast";
import { info } from "autoprefixer";
import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { Navigate } from "react-router-dom";
const AuthContext=createContext(null)

export const useAuthContext=()=>useContext(AuthContext) 
const initial={isAuth:false,
  user:{},
  isLoading:false
}
const reducer=(info,{type,payload})=>{
  switch(type){
    case "SET_LOGIN":return {isAuth:true ,user:payload.user}
    case "SET_LOGOUT":return {initial}
default :return info

  }

}
export const AuthContextProvider=({children})=>{
  const {toast}=useToast()
  const [info,dispatch]=useReducer(reducer,initial)
// Register user
const registerUser=async(formData)=>{
  try{
          const response = await axios.post("http://localhost:8000/api/v1/user/register", formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            });
          console.log("Data posted successfully:", response.data)

         return response.data

        }
        catch(e)
        {console.log(e)
         return  e.response.data
        }
}

// Login User 
const loginUser=async(formData)=>{
  try{
       const response = await axios.post("http://localhost:8000/api/v1/user/login", formData);
       console.log("user login successfully:", response.data)
         return response.data
     }
     catch(e)
     {console.log(e)
    return   e.response.data
     }
    

}



// logout user
const logoutUser=async()=>{
  
  try{
       const response = await axios.post("http://localhost:8000/api/v1/user/logout");
       console.log("user logout successfully:", response.data)
         return response.data
     }
     catch(e)
     {console.log(e)
    return   e.response.data
     }
    

}


const myProfile=async()=>{
  try{
    const response = await axios.get("http://localhost:8000/api/v1/user/myProfile", {
      withCredentials: true,
    });

      return response.data
  }
  catch(e)
  {console.log(e)
    // dispatch({ type: "SET_LOGOUT" });

 return   e.response.data
  }
}







return(
<AuthContext.Provider value={{...info,dispatch,registerUser,loginUser,myProfile,logoutUser}}>
{children}
</AuthContext.Provider>
)
}


