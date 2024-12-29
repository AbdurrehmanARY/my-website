import mongoose from "mongoose";
// import { DB_NAME } from "../../constant.js";
import { DB_NAME } from "../../constant.js";
const connectDb=async()=>{
console.log(DB_NAME)
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

console.log(`database is connected ${connectionInstance.connection.host}`)


    }
    catch(error){
        console.log('mongo db connection error',error)
    }

}
export default connectDb;