import {classNames} from "shared/lib/classNames/classNames";
import cls from './MainNews.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface MainNewsProps {
    className?: string;
}
export const MainNews = ({className}: MainNewsProps) => {
    
    return (
        <div className={classNames(cls.MainNews, {}, [className])}>
            <h1 className={cls.title}>
                Баскетбольный клуб
                «Динамо» Грозный
            </h1>
            <Button theme={ThemeButton.LEAD}>
                Смотреть
            </Button>
        </div>
    );
};