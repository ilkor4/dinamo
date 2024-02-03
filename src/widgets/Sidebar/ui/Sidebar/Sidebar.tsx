import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, useContext } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { collapsed, setCollapsed } = useContext(SidebarContext)

    const onClose = (): void => {
        setCollapsed?.(true)
    }

    return (
        <div className={
            classNames(cls.Sidebar, { [cls.Sidebar_collapsed]: collapsed ?? '' }, [className ?? ''])
        }>
            <Button
                onClick={onClose}
                theme={ThemeButton.CLEAR}
            >
              Закрыть меню
            </Button>
            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
            >
                Главная страница
            </AppLink>
            <AppLink
                to='/roaster'
                theme={AppLinkTheme.SECONDARY}
            >
                Состав команды
            </AppLink>
            <AppLink
                to='/roa'
                theme={AppLinkTheme.SECONDARY}
            >
                Страница 404
            </AppLink>
            <AppLink
                to='/about'
                theme={AppLinkTheme.SECONDARY}
            >
                О команде
            </AppLink>
        </div>
    )
}
