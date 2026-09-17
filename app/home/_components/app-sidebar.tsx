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
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, Grid2x2, Home, Plus } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "/home", icon: Home },
  { label: "Tableros", href: "/home/boards", icon: Grid2x2 },
  { label: "Calendario", href: "/home/calendar", icon: CalendarDays },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="top-14! h-[calc(100svh-3.5rem)]">
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 px-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <Avatar>
            <AvatarFallback className="bg-blue-600 text-white" >
              D
            </AvatarFallback>
          </Avatar>
          <span className="group-data-[collapsible=icon]:hidden">
            Demo&apos;s Workspace
          </span>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
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
        <SidebarGroup>
          <SidebarGroupLabel>Tus tableros</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Crear tablero">
                  <Plus />
                  <span>Crear tablero</span>
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
