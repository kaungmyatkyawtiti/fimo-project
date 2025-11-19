"use client"

import * as React from "react"

import { NavUser } from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { user } from "@/data/dummy"
import NavPanel from "./NavPanel"
import { LangSelection } from "./LangSelection"
import SocialMedia from "./SocialMedia"
import MyLogo from "./MyLogo"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="sidebar"
      {...props}
    >
      {/* <SidebarHeader> */}
      {/*   <SidebarMenu> */}
      {/*     <SidebarMenuItem> */}
      {/*       <SidebarMenuButton size="lg" asChild> */}
      {/*         <a href="#"> */}
      {/*           <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"> */}
      {/*             <Command className="size-4" /> */}
      {/*           </div> */}
      {/*           <div className="grid flex-1 text-left text-sm leading-tight"> */}
      {/*             <span className="truncate font-medium">Acme Inc</span> */}
      {/*             <span className="truncate text-xs">Enterprise</span> */}
      {/*           </div> */}
      {/*         </a> */}
      {/*       </SidebarMenuButton> */}
      {/*     </SidebarMenuItem> */}
      {/*   </SidebarMenu> */}
      {/* </SidebarHeader> */}

      <SidebarContent className="flex items-center my-4">
        <LangSelection />
        <NavPanel />
        <SocialMedia />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
