import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'

const filterNextGames = (gamesArray: TeamGameData[]) => {
    return gamesArray.filter(({ GameStatus }) => GameStatus === 0)
}

const filterRecentGames = (gamesArray: TeamGameData[]) => {
    return gamesArray.filter(({ GameStatus }) => GameStatus === 1)
}

export const trimGames = (gamesArray: TeamGameData[]): TeamGameData[] => {
    const renderArray = []
    const recentGames = filterRecentGames(gamesArray)
    const nextGames = filterNextGames(gamesArray)

    if (recentGames.length > 0) {
        recentGames.forEach((game) => {
            renderArray.unshift(game)
        })
    }

    if (nextGames.length > 0) {
        renderArray.unshift(nextGames[0])
    }

    return renderArray
}
