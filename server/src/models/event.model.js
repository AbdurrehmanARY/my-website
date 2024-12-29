import mongoose, { Schema } from "mongoose";


const eventSchema=new Schema(
  {

    title:{
        type:String,
        // required:true,
        // unique:true,
        // lowercase:true,
        // trim:true,
        // index:true // for optimizing searching in DB
    },
   description:{
        type:String,
        // required:true,
        // // unique:true,
        // lowercase:true,
        // trim:true,
    },
    date:{
        type:String,
        // required:true,
    },
    // coverImage:{
    //     type:String,
    // },
    location:{
        type:String,
        // required:true,
        // select:false
    },
    category:{
        type:String,
        // required:true,
        // select:false
    },
    visibility:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    },
    {
        timestamps:true
    }
);

const events=mongoose.model('Events',eventSchema)
export default events 
