import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'

export const trimGames = (gamesArray: TeamGameData[]): TeamGameData[] => {
    const renderArray = []
    const recentGames = gamesArray
        .filter(({ GameStatus }) => GameStatus === 1)
        .slice(-6)
    const nextGame = gamesArray
        .filter(({ GameStatus }) => GameStatus === 0)[0]

    recentGames.forEach((game) => {
        renderArray.unshift(game)
    })
    renderArray.unshift(nextGame)

    return renderArray
}
