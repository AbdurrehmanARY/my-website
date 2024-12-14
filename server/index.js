import connectDb from "./src/db/index.js"
import 'dotenv/config'
import { app } from "./server.js"
// import { app } from "./server.js"

connectDb()
app.get("/",(req,res)=>{
res.send('working')
})
 app.listen(8000,()=>{
    console.log(`server is running on port 8000  in `)

    // console.log(`server is running on port 8000 ${process.env.port} in ${process.env.NODE_ENV}`)
 
 
})