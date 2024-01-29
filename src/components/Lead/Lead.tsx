import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Lead.module.scss'
import LeadImage from 'shared/assets/images/lead-image.jpg'
import { GameBar } from 'widgets/GameBar'
import { MainNews } from 'components/MainNews/MainNews'
import { Video } from 'components/Video/Video'
import { type FC } from 'react'

interface LeadProps {
    className?: string
}
export const Lead: FC<LeadProps> = ({ className }) => {
    return (
        <section
            className={classNames(cls.Lead, {}, [className ?? ''])}
            style={{ backgroundImage: `url(${LeadImage})` }}
        >
            <Video />
            <GameBar />
            <MainNews />
        </section>
    )
}
