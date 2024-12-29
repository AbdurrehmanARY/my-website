import {  useAuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
export const ProtectedRoute=({children,roleAllowed})=> {
const {isAuth,user} =useAuthContext()
console.log(isAuth,user.role)
   if (!isAuth) {return <Navigate to="/auth/login" />;}
// if(!roleAllowed.includes(user?.role))  return( <Navigate to="/"/>)
 
   return children ? children : <Outlet />;
 
}
