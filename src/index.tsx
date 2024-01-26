import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import {GameProvider} from "app/providers/GamesProvider";
import {TeamProvider} from "app/providers/TeamProvider";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <GameProvider>
                <TeamProvider>
                    <App />
                </TeamProvider>
            </GameProvider>
        </ThemeProvider>
    </BrowserRouter>
)