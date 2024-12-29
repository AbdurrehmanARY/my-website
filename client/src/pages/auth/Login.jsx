import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TypographyH3 } from '@/components/ui/Typographyh1'
import { TypographyP } from '@/components/ui/TypographyP'
import { Label } from '@radix-ui/react-label'

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'
import { useToast } from '@/hooks/use-toast'
function Login() {
const {toast}=useToast()
  const [state, setState] = useState({email:'',password:''})
  const navigate=useNavigate()  
  const {dispatch,loginUser,logoutUser,isAuth,user}=useAuthContext()
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {email,password}=state
    const formData={email,password}
    // loginUser(formData)
    loginUser(formData).then((res)=>{

dispatch({type:"SET_LOGIN",payload:{isAuth:true,  user:res.user}})
if(res.success)
  {
    return (
  toast({
  title:res.success,
  description:res.message

},
navigate('/')
)
)


}
else{return (
  toast({
    variant: "destructive",
  title:res.success,
  description:res.message
}
))}

    }
    )
  }
  // const handleLogout=async()=>{
  //   const res=await logoutUser()
  //   toast({
  //     title:res.success,
  //     description:res.message
  //   })
  //   dispatch({ type: "SET_LOGOUT" });

  // }
  return (
   <>
   <form action="" onSubmit={handleSubmit}>
  <div className='flex flex-col w-72'>
      <TypographyH3 className='text-center' text='Login here'/> 
      <p className='text-sm font-semibold'>no account ? <Link className='font-bold hover:underline' to="/auth/register">register here</Link></p>
      {/* <TypographyP className="text-xl" text=" No account register"/> */}
      <div className="grid w-full max-w-sm items-center gap-4">
     
       <Label htmlFor="email" >Email</Label>
       <Input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />

       <Label htmlFor="password">Password</Label>
       <Input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
     <Button>Login</Button>
     </div>
     </div>
     </form>
   
   </>
     

  )
}

export default Login