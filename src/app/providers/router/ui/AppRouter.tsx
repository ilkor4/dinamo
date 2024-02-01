import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { type JSX, Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = (): JSX.Element => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    Object.values(RouteConfig)
                        .map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element = {(
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                )}
                            />
                        ))}
            </Routes>
        </Suspense>
    )
}
