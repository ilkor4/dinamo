import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
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
            theme={ThemeButton.POZ_MENU}
        >
            {
                theme === Theme.LIGHT
                    ? <LightIcon className={cls.logo}/>
                    : <DarkIcon className={cls.logo}/>
            }
        </Button>
    )
}
