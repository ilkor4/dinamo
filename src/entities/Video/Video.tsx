import cls from './Video.module.scss'
import MainVideo from 'shared/assets/video/lead-video.mp4'
import { type FC } from 'react'

export const Video: FC = () => {
    return (
        <video
            className={cls.Video}
            playsInline
            autoPlay
            muted
        >
            <source src={MainVideo} type="video/mp4" />
        </video>
    )
}
