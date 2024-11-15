"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomSidebar from "@/components/custom-sidebar";
import { usePathnameInfoContext } from "@/context/pathname-context";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const { currentPathInfo } = usePathnameInfoContext();

  return (
    <SidebarProvider>
      <CustomSidebar currentPath={currentPathInfo} />
      <main className="w-full py-5 px-5 flex">
        <SidebarTrigger />
        <div className="w-full content-center">{children}</div>
      </main>
    </SidebarProvider>
  );
}
