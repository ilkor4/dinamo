import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Roaster.module.scss'
import { type FC } from 'react'
import {
    type Coach as TCoach,
    type Player as TPlayer,
    type Staff as TStaff
} from 'features/MainApi/types/TeamRoasterData'
import { PersonList } from 'widgets/PersonList/PersonList'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'

interface RoasterProps {
    className?: string
    players: TPlayer[] | undefined
    coaches: TCoach[] | undefined
    staff: TStaff[] | undefined
}
export const Roaster: FC<RoasterProps> = (props) => {
    const {
        players,
        coaches,
        staff,
        className
    } = props

    return (
        <section className={classNames(cls.Roaster, {}, [className ?? ''])}>
            <PersonList players={players}/>
            <SectionTitle theme={SectionTitleTheme.POZ_ROASTER}>
                Тренерский штаб:
            </SectionTitle>
            <PersonList coaches={coaches}/>
            <SectionTitle theme={SectionTitleTheme.POZ_ROASTER}>
                Персонал:
            </SectionTitle>
            <PersonList staff={staff}/>
        </section>
    )
}
