import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/teamIcons/groznyi-logo.png'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
            onClick = {toggleTheme}
            theme={ThemeButton.MENU}
        >
            {
                theme === Theme.LIGHT
                    ? <img
                        src={DarkIcon}
                        className={cls.logo}
                        alt={'Тёмный логотип баскетбольного Динамо г. Грозный'}
                    />
                    : <img
                        src={DarkIcon}
                        className={cls.logo}
                        alt={'Тёмный логотип баскетбольного Динамо г. Грозный'}
                    />
            }
        </Button>
    )
}
