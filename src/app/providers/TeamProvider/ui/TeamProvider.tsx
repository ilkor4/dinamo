import {
    type FC, type PropsWithChildren,
    useCallback,
    useEffect,
    useState
} from 'react'
import { mainApi } from 'features/MainApi/MainApi'
import { TeamContext } from 'app/providers/TeamProvider/lib/TeamContext'
import { type TeamRoasterData } from 'features/MainApi/types/TeamRoasterData'

export const TeamProvider: FC<PropsWithChildren> = ({ children }) => {
    const [teamRoaster, setTeamRoaster] = useState<TeamRoasterData | null>(null)

    const fetchTeamRoaster = useCallback(async () => {
        return await mainApi.getTeamRoaster()
    }, [])

    useEffect(() => {
        fetchTeamRoaster()
            .then((roaster) => { setTeamRoaster(roaster) })
            .catch((err) => { console.log(err) })
    }, [fetchTeamRoaster])
    return (
        <TeamContext.Provider value={teamRoaster}>
            {children}
        </TeamContext.Provider>
    )
}
