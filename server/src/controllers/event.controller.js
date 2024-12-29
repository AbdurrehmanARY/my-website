
import events from "../models/event.model.js";

export const createEvent=async(req,res)=>{
    const {title,description,date,location,category,visibility}=req.body;
    console.log(title,description,date,location,category,visibility)
    // if(!title && !description && !date && !location && !category && !visibility){
    //     return( 
    //        res.json({
    //           success:'false',
    //           message:"fill all field"
    //    }) 
    //   ) 
    //    }

       const  event=await events.create({
        title,description,date,location,category,visibility
        })
res.json({
    message:"event create",
   event 
})
}
export const getAllCard=async(req,res)=>{
   
   const allEvents=await events.find()
   console.log(allEvents)
    res.json({
        message:"all cards",allEvents
    })
}