import { type FC, type ReactNode, useMemo, useState } from 'react'
import {
    SidebarContext
} from 'app/providers/SidebarProvider/lib/SidebarContext'

interface SidebarProps {
    children: ReactNode
}
const SidebarProvider: FC<SidebarProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const defaultProps = useMemo(() => ({
        collapsed,
        setCollapsed
    }), [collapsed])

    return (
        <SidebarContext.Provider value={defaultProps}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider
