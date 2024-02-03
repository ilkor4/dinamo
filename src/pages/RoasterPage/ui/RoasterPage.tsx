import { useContext } from 'react'
import { TeamContext } from 'app/providers/TeamProvider/lib/TeamContext'
import { Roaster } from 'widgets/Roaster'
import { type TeamRoasterData } from 'features/MainApi/types/TeamRoasterData'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'

export default function RoasterPage (): JSX.Element {
    const teamRoaster = useContext<TeamRoasterData | null>(TeamContext)
    const { Players, Coaches, Staff } = teamRoaster ?? {}
    return (
        <div className="roaster-page">
            <SectionTitle theme={SectionTitleTheme.POZ_ROASTER}>
                Состав команды:
            </SectionTitle>
            {<Roaster players={Players} coaches={Coaches} staff={Staff}/>}
        </div>
    )
}
