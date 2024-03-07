import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
    CLEAR = 'clear'

}
interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className ?? '', cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
