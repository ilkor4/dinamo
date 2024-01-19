import {classNames} from "shared/lib/classNames/classNames";
import cls from './Lead.module.scss'
import {newsArray} from "shared/assets/utils/constants";
import {GameBar} from "widgets/GameBar";
import {MainNews} from "components/MainNews/MainNews";
import {Video} from "components/Video/Video";

interface LeadProps {
    className?: string;
}
export const Lead = ({className}: LeadProps) => {
    
    return (
        <section
            className={classNames(cls.Lead, {}, [className])}
            style={{backgroundImage: `url(${newsArray[8].newsImage})`}}
        >
            <Video />
            <GameBar />
            <MainNews />
        </section>
    );
};