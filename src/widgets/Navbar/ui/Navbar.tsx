import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <AppLink to='/about'>Состав</AppLink>
            <AppLink to='/'>Главная</AppLink>
        </div>
    );
};