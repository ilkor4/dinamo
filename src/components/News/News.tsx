import cls from './News.module.scss'
import BallIcon from 'shared/assets/icons/ball-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { textSliser } from 'shared/lib/textSlicer/textSlicer'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface NewsProps {
    className?: string
    newsImage: string
    newsText: string
    newsTypeClass: string
}
export const News: FC<NewsProps> = (props) => {
    const {
        newsImage,
        newsText,
        newsTypeClass
    } = props

    return (
        <article
            className={classNames(cls.News, {}, [cls[newsTypeClass]])}
            style={{ backgroundImage: `url(${newsImage})` }}
        >
            <div
                className={
                    classNames(cls.News__wrapper, { [cls.News__wrapper_clear]: !newsText })
                }
            >
                <p className={cls.News__text}>
                    {textSliser({ text: newsText, number: 100 })}
                </p>
                <Button
                    theme={ThemeButton.POZ_NEWS}
                >
                    <div className={cls.News__buttonWrapper}>
                        <BallIcon className={cls.News__ballIcon}/>
                        Читать продолжение
                    </div>
                </Button>
            </div>
        </article>
    )
}
