import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme | undefined
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK
            ? Theme.LIGHT
            : Theme.DARK

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
