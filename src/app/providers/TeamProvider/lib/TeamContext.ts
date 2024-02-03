import { createContext } from 'react'
import { type TeamRoasterData } from 'features/MainApi/types/TeamRoasterData'

export const TeamContext = createContext<TeamRoasterData | null>(null)
