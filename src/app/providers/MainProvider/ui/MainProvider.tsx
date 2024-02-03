import { type FC, type PropsWithChildren } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { SidebarProvider } from 'app/providers/SidebarProvider'
import { GameProvider } from 'app/providers/GamesProvider'
import { TeamProvider } from 'app/providers/TeamProvider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <HashRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <SidebarProvider>
                        <GameProvider>
                            <TeamProvider>
                                {children}
                            </TeamProvider>
                        </GameProvider>
                    </SidebarProvider>
                </ThemeProvider>
            </ErrorBoundary>
        </HashRouter>
    )
}
