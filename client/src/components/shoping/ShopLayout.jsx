import React from 'react'
import ShopHeader from './ShopHeader'
import { Outlet } from 'react-router-dom'

function ShopLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShopHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default ShopLayout