import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Burger.module.scss'
import BurgerIcon from 'shared/assets/icons/menu.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, type MouseEventHandler } from 'react'

interface BurgerProps {
    className?: string
    onOpen: MouseEventHandler<HTMLButtonElement>
}
export const Burger: FC<BurgerProps> = ({ className, onOpen }) => {
    return (
        <Button theme={ThemeButton.MENU} onClick={onOpen}>
            <BurgerIcon
                className={classNames(cls.Burger, {}, [className ?? ''])}
            />
        </Button>
    )
}
