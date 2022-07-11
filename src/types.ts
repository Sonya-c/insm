
import { ReactNode } from "react";

export interface RouteObject {
    hidden?: boolean,
    element: React.ReactNode,
    path: string,
    label: string,
    title: string, 
    subtitle: string,
}

export interface SectionProps {
  title: string,
  subtitle: string,
  children?: ReactNode
}


export interface LayoutProps {
    title: string 
    subtitle: string,
    children?: ReactNode
}

export interface ServicioProps {
    title: string, 
    text: string,
    img?: string
}
