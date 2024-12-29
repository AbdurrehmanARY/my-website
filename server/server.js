import express from "express"
import cookieParser from 'cookie-parser'
// import userRouter from './src/route/user.js'
// import { router } from './src/route/task.route.js'
import { eventRouter } from "./src/routes/event.route.js"
import { router} from "./src/routes/user.route.js"
import cors from "cors"
export const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public')) 
app.use(cookieParser()) 
app.use(
    cors({
    //   origin: [process.env.FRONTEND_URL],
    origin: 'http://localhost:5173', // Allow requests from you
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use('/api/v1/user',router)
app.use('/api/v1/event',eventRouter)