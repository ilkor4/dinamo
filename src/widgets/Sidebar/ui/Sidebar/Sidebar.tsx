import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, useContext } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import CloseIcon from 'shared/assets/icons/close-icon.svg'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

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
                className={cls.Sidebar__clbutton}
            >
                <CloseIcon className={cls.Sidebar__close}/>
            </Button>

            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
                onClick={onClose}
            >
                Главная страница
            </AppLink>
            <AppLink
                to='/roaster'
                theme={AppLinkTheme.SECONDARY}
                onClick={onClose}
            >
                Состав команды
            </AppLink>
            <AppLink
                to='/about'
                theme={AppLinkTheme.SECONDARY}
                onClick={onClose}
            >
                Расписание матчей
            </AppLink>
            <ThemeSwitcher className={cls.Sidebar__theme}/>
        </div>
    )
}
