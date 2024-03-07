import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Coach.module.scss'
import { type FC } from 'react'
import { type Coach as TCoach, type Staff as TStaff } from 'features/MainApi/types/TeamRoasterData'

interface CoachProps {
    coach: TCoach | TStaff
    className?: string
}
export const Coach: FC<CoachProps> = (props) => {
    const { coach, className } = props
    const {
        PersonInfo,
        PhotoUrl,
        Post
    } = coach
    const {
        PersonFirstNameRu,
        PersonLastNameRu
    } = PersonInfo

    return (
        <article className={classNames(cls.Coach, {}, [className ?? ''])}>
            <div className={cls.Coach__description}>
                <p className={cls.Coach__name}>{PersonFirstNameRu}</p>
                <h3 className={cls.Coach__surname}>{PersonLastNameRu}</h3>
                <p className={cls.Coach__post}>{Post}</p>
            </div>
            <img className={cls.Coach__image}
                alt="Фотография тренера команды"
                src={PhotoUrl}
            />
        </article>
    )
}
