import {Button} from "./components/Button/Button";
import './index.scss';
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

export const App = () => {

    return (
        <div className="app">
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