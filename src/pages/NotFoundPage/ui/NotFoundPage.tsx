import cls from './NotFoundPage.module.scss'
import { type FC } from 'react'

export const NotFoundPage: FC = () => {
    return (
        <div className={cls.NotFoundPage}>
            Oшибка 404!
            Ничего не найдено
        </div>
    )
}
