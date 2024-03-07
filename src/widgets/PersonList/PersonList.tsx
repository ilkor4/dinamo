import { type FC } from 'react'
import cls from './PersonList.module.scss'
import {
    type Coach as TCoach,
    type Player as TPlayer,
    type Staff as TStaff
} from 'features/MainApi/types/TeamRoasterData'
import { classNames } from 'shared/lib/classNames/classNames'
import { Player } from 'entities/Player/Player'
import { Coach } from 'entities/Coach/Coach'
import { Staff } from 'entities/Staff/Staff'

interface PersonListProps {
    staff?: TStaff[]
    players?: TPlayer[]
    coaches?: TCoach[]
    className?: string
}
export const PersonList: FC<PersonListProps> = (props) => {
    const {
        className,
        staff,
        players,
        coaches
    } = props

    return (
        <ul className={classNames(cls.PersonList, {}, [className ?? ''])}>
            {players?.map((player, index) => {
                return (
                    <Player player={player} key={index}/>
                )
            }
            )}
            {coaches?.map((coach, index) => {
                return (
                    <Coach coach={coach} key={index}/>
                )
            }
            )}
            {staff?.map((staff, index) => {
                return (
                    <Staff staff={staff} key={index}/>
                )
            }
            )}
        </ul>
    )
}
