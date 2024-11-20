import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { IPathnameInfo } from "@/interfaces/interfaces";
import { PATHS_INFO } from "@/data/paths-info";
import { TOPICS } from "@/data/topics";

export default function CustomSidebar({ currentPath }: { currentPath: IPathnameInfo | null }) {
  const { setOpenMobile } = useSidebar();

  console.log(currentPath?.url);

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-6">
        <Link className="text-base font-extrabold" href={`/${currentPath?.url}`}>
          {currentPath?.title}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {currentPath?.url !== "guia-resolucion" ? (
          <SidebarGroup>
            <SidebarGroupLabel>Temas</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {TOPICS.map((topic) => (
                  <SidebarMenuItem key={topic.title}>
                    <SidebarMenuButton asChild>
                      <Link href={`/${currentPath?.url}/${topic.name}`} onClick={() => setOpenMobile(false)}>
                        <span>{topic.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : (
          <></>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Otras funciones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <span>Inicio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {PATHS_INFO.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <Link href={`/${route.url}`}>
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
