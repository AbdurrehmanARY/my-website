// import { User } from '../model/index.js'
import users from "../models/user.model.js";
import bcrypt from "bcrypt";
// import users from "../model/user.model.js"
// import jwt from "jsonwebtoken"
import { sendCookie } from "../utils/feature.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// export const getAllUser=async(req,res)=>{
//     //   res.send('all user')
//       const newUser=await User.find({})
//       console.log(newUser)
//       res.json({
//         message:"user created successfully",
//         data:newUser
//     })
//     }

// Register controller

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);
  if (!name && !email && !password && !role) {
    return res.json({
      success: "false",
      message: "fill all field",
    });
  }
  let avatar = req.file?.path;
  if (!avatar) {
    return res.json({
      success: "false",
      message: "Please upload an avatar",
    });
  }

  avatar = await uploadOnCloudinary(avatar);
  avatar = avatar.url;

  try {
    // check user is already exist or not

    const userExist = await users.findOne({ email });
    if (userExist) {
      return res.status(404).json({
        success: "false",
        message: "user already exist",
      });
    } else {
      //    password to be hashed

      const hashedPassword = await bcrypt.hash(password, 10);

      //    store to database

      let user = await users.create({
        name,
        email,
        password: hashedPassword,
        role,
        avatar,
      });
      sendCookie(user, res, "register successfully", 202);
    }
  } catch (err) {
    console.log(err);
  }
};

// Login controller

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // get user or email from DB
    const user = await users.findOne({ email });
    // check user or email exist or not
    console.log(user);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      // check password is match or not
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(404).json({
          success: false,
          message: "password is invalid",
        });
      } else {
        sendCookie(user, res, `welcome #${user.name}`, 200);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// logout controller

export const logout = async (req, res) => {
  // res.clearCookie("token").json({
  //     success:true,
  //     message:"logout successfully"
  //     })
  res
    .cookie("token", "", {
      expires: new Date(Date.now()),
      // sameSite:process.env.NODE_ENV==="DEVELOPMENT" ?"lax":"none"  ,
      // secure:process.env.NODE_ENV==="DEVELOPMENT"   ? false : true
    })
    .json({
      success: true,
      message: "logout successfully",
    });
};
export const myProfile = async (req, res) => {
  res.json({
    message: "my profile",
    user: req.user,
  });
};
