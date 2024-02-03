import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Player.module.scss'
import { playersNumbersList } from 'shared/assets/utils/constants'
import { type FC } from 'react'
import { type Player as TPlayer } from 'features/MainApi/types/TeamRoasterData'

interface PlayerProps {
    player: TPlayer
    className?: string
}
export const Player: FC<PlayerProps> = (props) => {
    const { player, className } = props
    const {
        PersonInfo,
        Position,
        PhotoUrl
    } = player
    const {
        PersonID,
        PersonFirstNameRu,
        PersonLastNameRu
    } = PersonInfo

    return (
        <li className={classNames(cls.Player, {}, [className ?? ''])}>
            <div className={cls.Player__description}>
                <p className={cls.Player__number}>{playersNumbersList[PersonID]}</p>
                <p className={cls.Player__name}>{PersonFirstNameRu}</p>
                <h3 className={cls.Player__surname}>{PersonLastNameRu}</h3>
                <p className={cls.Player__position}>{Position}</p>
            </div>
            <img className={cls.Player__image}
                alt="Фотография игрока команды"
                src={PhotoUrl}
            />
        </li>
    )
}
