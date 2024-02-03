import { createContext } from 'react'

export interface SidebarContentProps {
    collapsed?: boolean
    setCollapsed?: (collapsed: boolean) => void
}

export const SidebarContext = createContext<SidebarContentProps>({})
