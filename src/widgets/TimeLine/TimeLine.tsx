import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TimeLine.module.scss'
import { News } from 'entities/News/News'
import { newsArray } from 'shared/assets/utils/constants'
import { type FC } from 'react'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'

interface TimeLineProps {
    className?: string
}
export const TimeLine: FC<TimeLineProps> = ({ className }) => {
    return (
        <section className={classNames(cls.TimeLine, {}, [className ?? ''])}>
            <SectionTitle theme={SectionTitleTheme.POZ_MAIN}>
                Новости</SectionTitle>
            <ul className={cls.TimeLine__list}>
                {newsArray.map(({ newsImage, newsText, newsTypeClass, newsLink }, index) =>
                    <News
                        key={index}
                        newsImage={newsImage}
                        newsText={newsText}
                        newsTypeClass={newsTypeClass}
                        newsLink={newsLink}
                    />
                )}
            </ul>
        </section>
    )
}
