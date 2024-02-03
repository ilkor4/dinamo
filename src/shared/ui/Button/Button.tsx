import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = '_clear',
    POZ_LEAD = 'Button_poz_lead',
    POZ_MENU = 'Button_poz_menu',
    POZ_NEWS = 'Button_poz_news',
    POZ_GAME = 'Button_poz_game',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className ?? '', cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
