import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {Button} from "shared/ui/Button/Button";
import {useContext, useState} from "react";
import {SidebarContext} from "app/providers/SidebarProvider/lib/SidebarContext";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const {collapsed, setCollapsed}  = useContext(SidebarContext);

    const onClose = () => {
        setCollapsed(true);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.Sidebar_collapsed]: collapsed}, [className])}>
            <Button
                onClick={onClose}
            >
                Закрыть меню
            </Button>

        </div>
    );
};