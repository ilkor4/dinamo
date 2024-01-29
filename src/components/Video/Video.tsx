import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Video.module.scss'
import MainVideo from 'shared/assets/video/lead-video.mp4'
import { type FC } from 'react'

interface VideoProps {
    className?: string
}
export const Video: FC<VideoProps> = ({ className }) => {
    return (
        <video
            className={classNames(cls.Video, {}, [className ?? ''])}
            playsInline
            autoPlay
            muted
        >
            <source src={MainVideo} type="video/mp4" />
        </video>
    )
}
