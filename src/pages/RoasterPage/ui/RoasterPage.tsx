import { useContext } from 'react'
import { TeamContext } from 'app/providers/TeamProvider/lib/TeamContext'
import { Roaster } from 'widgets/Roaster'

export default function RoasterPage (): JSX.Element {
    const teamRoaster = useContext<TeamRoasterData | null>(TeamContext)
    const { Players/* Coaches, Staff */ } = teamRoaster ?? {}
    return (
        <div className="roaster">
            {<Roaster players={Players}/>}
        </div>
    )
}
