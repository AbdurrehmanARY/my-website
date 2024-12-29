import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from '../ui/app-sidebar'

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
    {/* admin sidebar */}

    <SidebarProvider>
      <AppSidebar/>
    {/* <AdminSidebar /> */}
    <div className="flex flex-1 flex-col">
    <AdminHeader  />

      {/* admin header */}
      <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
      <SidebarTrigger/>
        <Outlet />
      </main>
    </div>
    </SidebarProvider>

  </div>
  )
}

export default AdminLayout