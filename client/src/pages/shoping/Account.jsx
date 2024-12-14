import React from 'react'
import { useLocation } from 'react-router-dom'

function Account() {
    const location = useLocation()
    console.log(location)
    // console.log("path")
    if(location.pathname!="/shop/account"){
console.log('true')
    }


  return (
    <div>Account</div>
  )
}

export default Account