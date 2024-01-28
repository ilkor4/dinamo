import {FC, ReactNode, useMemo, useState} from "react";
import {SidebarContext} from "app/providers/SidebarProvider/lib/SidebarContext";


interface Props {
    children: ReactNode;
}
const SidebarProvider: FC<Props> = ({children}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const defaultProps = useMemo(() => ({
        collapsed: collapsed,
        setCollapsed: setCollapsed,
    }), [collapsed]);

    return (
        <SidebarContext.Provider value={defaultProps}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;