"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Grid2x2, LogOut, Plus } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Mis tableros", href: "/home", icon: Grid2x2 },
  { label: "Crear tablero", href: "#", icon: Plus },
];

export default function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="top-14! h-[calc(100svh-3.5rem)]">
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 px-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 ">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex w-full items-center gap-2 rounded-md px-1 py-1 text-left hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:cursor-pointer group-data-[collapsible=icon]:justify-center"
          >
            <Avatar>
              <AvatarFallback className="bg-blue-600 text-white font-bold">
                D
              </AvatarFallback>
            </Avatar>
            <span className="flex-1 truncate group-data-[collapsible=icon]:hidden text-wrap">
              Demo&apos;s Workspace
            </span>
          </button>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navigation.map(({ label, href, icon: Icon }) => (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton
                  isActive={href === "/home"}
                  tooltip={label}
                  render={<Link href={href} />}
                >
                  <Icon />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <Separator/>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Crear tablero">
                  <LogOut />
                  <span>Cerrar sesión</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
