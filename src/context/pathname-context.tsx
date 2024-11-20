"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IPathnameInfo } from "@/interfaces/interfaces";
import { PATHS_INFO } from "@/data/paths-info";

interface IPathnameInfoContext {
  currentPathInfo: IPathnameInfo | null;
}

const PathnameInfoContext = createContext<IPathnameInfoContext | undefined>(undefined);

export function PathnameInfoProvider({ children }: { children: React.ReactNode }) {
  const [currentPathInfo, setCurrentPathInfo] = useState<IPathnameInfo | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Actualiza el estado basado en la ruta
    const pathInfo = PATHS_INFO.find((a) => pathname.includes(a.url)) || null;
    setCurrentPathInfo(pathInfo);
  }, [pathname]);

  return <PathnameInfoContext.Provider value={{ currentPathInfo }}>{children}</PathnameInfoContext.Provider>;
}

// Hook personalizado para consumir el contexto
export function usePathnameInfoContext() {
  const context = useContext(PathnameInfoContext);
  if (!context) {
    throw new Error("usePathnameInfoContext debe ser usado dentro de PathnameInfoProvider");
  }
  return context;
}
