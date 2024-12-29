import express from "express";
import { login, logout, myProfile, register } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAuth } from "../middlewares/auth.middleware.js";
export const router=express.Router()
// import multer from "multer";
// const upload = multer({ storage: multer.memoryStorage() });
// register router 
// router.post("/register", upload.fields(
// [    {
//     name:"avatar",
//     maxCount:1
// }]
// )
//     ,register)
router.post('/register', upload.single('avatar'), register);
// login router 
router.post("/login",login)
// my profile route
router.get("/myProfile",isAuth,myProfile)
// logout route 
router.post("/logout",logout)