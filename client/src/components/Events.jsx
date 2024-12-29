import React from 'react'
import { EventCard } from './Cards'
// import { useAuthContext } from '@/context/AuthContext'
import { useEventContext } from '@/context/EventContext'
function Events() {
     const{eventArray}=useEventContext()
  return (
   <>
  <div className='flex flex-row flex-wrap'>
  {eventArray.map((event)=>{
           return(
   
             <>
              <EventCard event={event}/>
             </>
           )
         })}

  </div>
   
   </>
  )
}

export default Events