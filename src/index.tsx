import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import {GameProvider} from "app/providers/GamesProvider";
import {TeamProvider} from "app/providers/TeamProvider";
import {SidebarProvider} from "app/providers/SidebarProvider";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <SidebarProvider>
                <GameProvider>
                    <TeamProvider>
                        <App />
                    </TeamProvider>
                </GameProvider>
            </SidebarProvider>
        </ThemeProvider>
    </BrowserRouter>
)