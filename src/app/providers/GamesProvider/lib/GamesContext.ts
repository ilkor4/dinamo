import { createContext } from 'react'
import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'

export const GamesContext = createContext<TeamGameData[]>([])
