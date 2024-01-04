import {Button} from "components/Button/Button";
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeSwitcher />
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    {
                        Object.values(RouteConfig)
                            .map(({path, element}) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element = {element}
                                />
                            ))}
                </Routes>
            </Suspense>
            <Button />
        </div>
    );
};