import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import LogoIcon from '../../../shared/assets/icons/teamIcons/groznyi-logo.png'
import TicketIcon from 'shared/assets/icons/ticket-icon.svg'
import { Burger } from 'entities/Burger/Burger'
import { type FC, useContext, useState } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { setCollapsed } = useContext(SidebarContext)
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = (): void => {
        setCollapsed?.(false)
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
                onClick={() => { setCollapsed?.(true) }}
            >
                <img
                    src={LogoIcon}
                    className={cls.Navbar__logo}
                    alt={'Логотип баскетбольного Динамо г. Грозный'}
                />
            </AppLink>
            <TicketIcon
                onClick={() => { setIsOpen(true) }}
                className={cls.Navbar__ticket}
            />
            <Burger onOpen={onOpen}/>
            <Modal
                isOpen={isOpen}
                onClose={() => { setIsOpen(false) }}
            />
        </header>
    )
}
