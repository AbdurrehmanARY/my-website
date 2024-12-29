"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
function Header() {
    useEffect(() => {
        myProfile().then((res)=>{
      if(res.user){
        dispatch({type:"LOGIN",payload:res.user})
      }
      else{
        dispatch({type:"LOGOUT"})
      }
      
      
        })
      // console.log(res)
         
        }, []);
    const {isAuth,user,dispatch,myProfile,logoutUser}=useAuthContext()
const {toast}=useToast()

console.log(isAuth,user)

  const handleLogout=async()=>{
    const res=await logoutUser()
    toast({
      title:res.success,
      description:res.message
    })
    dispatch({ type: "SET_LOGOUT" });

  }
  return (
  
<Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isAuth ?
        <>
         <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user.avatar} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.name}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
        
      
          <Dropdown.Item>
          <Link to={"/admin/dashboard"}>
Dashboard
</Link>

          </Dropdown.Item>
            <Dropdown.Divider /> 
           <Dropdown.Item>
           <Button onClick={handleLogout}>Logout</Button>

            </Dropdown.Item> 
        
          {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
        
        </Dropdown>
        </>
        :
        <>
          <div className="flex flex-row gap-5">
<Button>
<Link to={"/auth/login"}>
Login
</Link>

</Button>
<Button><Link to={"/auth/register"}>
Sign up
</Link></Button>


         </div>
        </>
        
        }
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        
        {/* <Navbar.Link href="#">About</Navbar.Link> */}
        <Navbar.Link href="#">Services</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );


  
}

export default Header