import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RoasterPage } from 'pages/RoasterPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ROASTER = 'roaster'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ROASTER]: '/roaster'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    [AppRoutes.ROASTER]: {
        path: RoutePaths.roaster,
        element: <RoasterPage />
    }
}
