import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { type FC } from 'react'

interface PageLoaderProps {
    className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className ?? ''])}>
            <span className={cls.PageLoader__loader}></span>
        </div>
    )
}
