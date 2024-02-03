import { type TeamGameData } from './types/TeamGamesData'
import { type TeamRoasterData } from './types/TeamRoasterData'
import { type GameData } from './types/GameData'
import { type TeamStatsData } from './types/TeamStatsData'

class MainApi {
    private readonly baseUrl: string
    private readonly teamId: number

    constructor (baseUrl: string, teamId: number) {
        this.baseUrl = baseUrl
        this.teamId = teamId
    }

    private async _makeRequest<T>(url: string, options?: RequestInit): Promise<T> {
        try {
            const response: Response = await fetch(url, options)

            if (response.ok) {
                return await response.json()
            } else {
                return await Promise.reject(new Error(`Ошибка ${response.status}`))
            }
        } catch (err) {
            console.error(`Error in _makeRequest: ${err}`)
            throw new Error('Failed to make request.')
        }
    }

    public async getTeamRoaster (): Promise<TeamRoasterData> {
        const endpoint = `/Widget/TeamRoster/${this.teamId}?compId=42724&format=json&lang=ru`
        const url = this.baseUrl + endpoint

        try {
            return await this._makeRequest<TeamRoasterData>(url)
        } catch (err) {
            console.error(`Error in getTeamRoster: ${err}`)
            throw new Error('Failed to get team roster.')
        }
    }

    public async getTeamGames (): Promise<TeamGameData[]> {
        const endpoint = `/Widget/TeamGames/${this.teamId}?compId=42724&format=json`
        const url = this.baseUrl + endpoint

        try {
            return await this._makeRequest<TeamGameData[]>(url)
        } catch (err) {
            console.log(`Error in getTeamGames: ${err}`)
            throw new Error('Failed to get team games')
        }
    }

    public async getTeamStats (): Promise<TeamStatsData> {
        const endpoint = `/Widget/TeamStats/${this.teamId}?compId=42724&format=json&lang=ru`
        const url = this.baseUrl + endpoint

        try {
            return await this._makeRequest<TeamStatsData>(url)
        } catch (err) {
            console.error(`Error in getTeamStats: ${err}`)
            throw new Error('Failed to get team stats')
        }
    }

    public async getGameProtocol (gameId: number): Promise<GameData> {
        const endpoint = `/Widget/GetOnline/${gameId}?format=json&lang=ru`
        const url = this.baseUrl + endpoint

        try {
            return await this._makeRequest<GameData>(url)
        } catch (err) {
            console.error(`Error in getGameProtocol ${err}`)
            throw new Error('Failed to get game protocol')
        }
    }
}

export const mainApi = new MainApi('https://org.infobasket.su', 28016)
