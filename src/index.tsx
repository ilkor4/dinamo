import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { MainProvider } from 'app/providers/MainProvider'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <MainProvider>
        <App />
    </MainProvider>
)
