import {classNames} from "shared/lib/classNames/classNames";
import cls from './Burger.module.scss'
import BurgerIcon from 'shared/assets/icons/menu.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {MouseEventHandler} from "react";

interface BurgerProps {
    className?: string;
    onOpen: MouseEventHandler<HTMLButtonElement>,
}
export const Burger = ({className, onOpen}: BurgerProps) => {
    
    return (
        <Button theme={ThemeButton.MENU} onClick={onOpen}>
            <BurgerIcon
                className={classNames(cls.Burger, {}, [className])}
            />
        </Button>
    );
};