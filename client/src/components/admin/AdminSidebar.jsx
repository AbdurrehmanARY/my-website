import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from '../ui/sidebar'

function AdminSidebar() {
  return (
    <>
    <Sidebar>
<SidebarHeader/>
<SidebarContent>
<SidebarMenu>
  <SidebarMenuItem> 1 </SidebarMenuItem>
  <SidebarMenuItem> 1 </SidebarMenuItem>
  <SidebarMenuItem> 1 </SidebarMenuItem>

</SidebarMenu>
</SidebarContent>
<SidebarFooter/>
    </Sidebar>
    </>
  )
}

export default AdminSidebar