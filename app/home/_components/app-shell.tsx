"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import TrelloLogo from "@/components/ui/trello-logo";
import AppSidebar from "./app-sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex-col">
      <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <TrelloLogo className="size-5" />
        <span className="text-lg font-semibold tracking-wide">Trello</span>
      </header>
      <div className="flex min-h-0 flex-1">
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
