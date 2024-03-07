import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Staff.module.scss'
import { type FC } from 'react'
import { type Staff as TStaff } from 'features/MainApi/types/TeamRoasterData'

interface StaffProps {
    staff: TStaff
    className?: string
}
export const Staff: FC<StaffProps> = (props) => {
    const { staff, className } = props
    const {
        PersonInfo,
        PhotoUrl,
        Post
    } = staff
    const {
        PersonFirstNameRu,
        PersonLastNameRu
    } = PersonInfo

    return (
        <li className={classNames(cls.Staff, {}, [className ?? ''])}>
            <div className={cls.Staff__description}>
                <p className={cls.Staff__name}>{PersonFirstNameRu}</p>
                <h3 className={cls.Staff__surname}>{PersonLastNameRu}</h3>
                <p className={cls.Staff__post}>{Post}</p>
            </div>
            <img className={cls.Staff__image}
                alt="Фотография сотрудника команды"
                src={PhotoUrl}
            />
        </li>
    )
}
