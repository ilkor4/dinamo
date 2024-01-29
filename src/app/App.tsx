import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { type FC } from 'react'

export const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme ?? ''])}>
            <Navbar />
            <div className="content-page">
                <AppRouter />
                <Sidebar />
            </div>
        </div>
    )
}
