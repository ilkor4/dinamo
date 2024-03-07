import cls from './News.module.scss'
import BallIcon from 'shared/assets/icons/ball-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { textSliser } from 'shared/lib/textSlicer/textSlicer'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NewsProps {
    className?: string
    newsImage: string
    newsText: string
    newsLink: string
    newsTypeClass: string
}
export const News: FC<NewsProps> = (props) => {
    const {
        newsImage,
        newsText,
        newsTypeClass,
        newsLink
    } = props

    return (
        <li
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
                <AppLink
                    to={newsLink}
                    target="_blank"
                    theme={AppLinkTheme.CLEAR}
                >
                    <Button
                        theme={ThemeButton.POZ_NEWS}
                    >
                        <div className={cls.News__buttonWrapper}>
                            <BallIcon className={cls.News__ballIcon}/>
                            Читать продолжение
                        </div>
                    </Button>

                </AppLink>
            </div>
        </li>
    )
}
