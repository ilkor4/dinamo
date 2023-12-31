import {Button} from "./components/Button/Button";
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Меняем тему</button>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <Button />
        </div>
    );
};