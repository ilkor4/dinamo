import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/images/logo.png';
import DarkIcon from 'shared/assets/icons/logo.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick = {toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT
                    ? <DarkIcon fill={'white'} height={'50px'} width={'50px'}/>
                    : <img src={LightIcon} className={cls.logo} />
            }
        </Button>
    );
};