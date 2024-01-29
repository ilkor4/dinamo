import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, useContext } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { collapsed, setCollapsed } = useContext(SidebarContext)

    const onClose = (): void => {
        setCollapsed?.(true)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.Sidebar_collapsed]: collapsed ?? '' }, [className ?? ''])}>
            <Button
                onClick={onClose}
                theme={ThemeButton.CLEAR}>
              Закрыть меню
            </Button>

        </div>
    )
}
