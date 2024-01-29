import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TimeLine.module.scss'
import { News } from 'components/News/News'
import { newsArray } from 'shared/assets/utils/constants'
import { type FC } from 'react'

interface TimeLineProps {
    className?: string
}
export const TimeLine: FC<TimeLineProps> = ({ className }) => {
    return (
        <ul className={classNames(cls.TimeLine, {}, [className ?? ''])}>
            {newsArray.map(({ newsImage, newsText }) =>
                <li key={newsImage}>
                    <News
                        newsImage={newsImage}
                        newsText={newsText}
                    />
                </li>
            )}
        </ul>
    )
}
