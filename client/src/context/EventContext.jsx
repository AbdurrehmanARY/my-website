import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const EventContext=createContext(null)
export const useEventContext=()=>useContext(EventContext) 
export const EventContextProvider=({children})=>{
    const [eventArray,setEventArray]=useState([{}])
    
    // create event
    const createEvent=async(formData)=>{
        console.log('working')
        try{
                const response = await axios.post("http://localhost:8000/api/v1/event/create", formData,
                  {
                    headers: {
                    //   "Content-Type": "multipart/form-data",
                    "Content-Type": "application/json",

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

      // get all event
      const getAllEvent=async()=>{
        try{
          const response = await axios.get("http://localhost:8000/api/v1/event/all", {
            withCredentials: true,
          });
      setEventArray(response.data.allEvents)
            return response.data
        }
        catch(e)
        {console.log(e)

       return   e.response.data
        }
      }
      useEffect(()=>{
        getAllEvent()
    },[])



  
    return(
        <EventContext.Provider value={{createEvent,getAllEvent,eventArray}}>
        {children}
        </EventContext.Provider>
        )
}