import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
// import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import TicketIcon from 'shared/assets/icons/ticket-icon.svg'
import { Burger } from 'components/Burger/Burger'
import { type FC, useContext } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { setCollapsed } = useContext(SidebarContext)

    const onOpen = (): void => {
        setCollapsed?.(false)
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <ThemeSwitcher />
            <TicketIcon className={cls.Navbar__ticket}/>
            <Burger onOpen={onOpen}/>
        </header>
    )
}
