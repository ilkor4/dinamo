import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'
import { type GameData } from 'features/MainApi/types/GameData'
import { useCallback, useEffect, useState } from 'react'
import { mainApi } from 'features/MainApi/MainApi'

export interface ProtocolState {
    isOpen: boolean
    gameId: number | null
    gameInfo: TeamGameData | null
    gameData: GameData | null
}

interface useProtocolResult {
    protocolState: ProtocolState
    setProtocolState: (protocolState: ProtocolState) => void
}
export function useProtocol (): useProtocolResult {
    const [protocolState, setProtocolState] = useState<ProtocolState>({
        isOpen: false,
        gameId: null,
        gameInfo: null,
        gameData: null
    })

    const fetchGame = useCallback(async () => {
        return await mainApi.getGameProtocol(protocolState.gameId!) /* Костыль */
    }, [protocolState.gameId])

    useEffect(() => {
        if (protocolState.isOpen) {
            fetchGame()
                .then((gameData) => { setProtocolState({ ...protocolState, gameData }) })
                .catch((err) => { console.log(err) })
        }
    }, [fetchGame, protocolState.isOpen])

    return {
        protocolState,
        setProtocolState
    }
}
