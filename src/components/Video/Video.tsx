import {classNames} from "shared/lib/classNames/classNames";
import cls from './Video.module.scss'
import MainVideo from "shared/assets/video/lead-video.mp4";

interface VideoProps {
    className?: string;
}
export const Video = ({className}: VideoProps) => {
    
    return (
        <video
            className={classNames(cls.Video, {}, [className])}
            playsInline
            autoPlay
            muted
        >
            <source src={MainVideo} type="video/mp4" />
        </video>
    );
};