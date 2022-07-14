
import { ReactNode } from "react";


// Router element. Used in the nav 
export interface RouteObject {
    hidden?: boolean,
    element: React.ReactNode,
    path: string,
    label: string,
    title: string, 
    subtitle: string,
}

export interface HeaderProps {
    title: string,
    subtitle: string
    children?: ReactNode
}

export interface SectionProps extends HeaderProps {
  id?: string,
  className?: string,
}

export interface CardTypes {
    title: string,
    text?: string,
    img?: string
}
