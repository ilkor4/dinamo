import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Roaster.module.scss'
import { Person } from 'components/Person/Person'
import { type FC } from 'react'

interface RoasterProps {
    className?: string
    players: Player[] | undefined
}
export const Roaster: FC<RoasterProps> = (props) => {
    const { players, className } = props

    return (
        <ul className={classNames(cls.Roaster, {}, [className ?? ''])}>
            {players?.map((person, index) => {
                return (
                    <Person person={person} key={index}/>
                )
            }
            )};
        </ul>
    )
}
