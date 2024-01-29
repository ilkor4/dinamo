import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Person.module.scss'
import { playersNumbersList } from 'shared/assets/utils/constants'
import { type FC } from 'react'

interface PersonProps {
    person: Player
    className?: string
}
export const Person: FC<PersonProps> = (props) => {
    const { person, className } = props
    const {
        PersonInfo,
        Position,
        PhotoUrl
    } = person
    const {
        PersonID,
        PersonFirstNameRu,
        PersonLastNameRu
    } = PersonInfo

    return (
        <div className={classNames(cls.Person, {}, [className ?? ''])}>
            <div className={cls.Person__description}>
                <p className={cls.Person__number}>{playersNumbersList[PersonID]}</p>
                <p className={cls.Person__name}>{PersonFirstNameRu}</p>
                <h3 className={cls.Person__surname}>{PersonLastNameRu}</h3>
                <p className={cls.Person__position}>{Position}</p>
            </div>
            <img className={cls.Person__image}
                alt="Фотография игрока команды"
                src={PhotoUrl}
            />
        </div>
    )
}
