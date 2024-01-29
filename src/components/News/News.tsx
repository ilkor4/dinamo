import cls from './News.module.scss'
import BallIcon from 'shared/assets/icons/ball-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { textSliser } from 'shared/lib/textSlicer/textSlicer'
import { type FC } from 'react'

interface NewsProps {
    className?: string
    newsImage: string
    newsText: string
}
export const News: FC<NewsProps> = (props) => {
    const {
        newsImage,
        newsText
    } = props

    return (
        <div
            className={`${cls.News} ${
                (newsText !== '')
                    ? ''
                    : cls.wideImage
            }`
            }
            style={{ backgroundImage: `url(${newsImage})` }}
        >
            <div
                className={
                    `${cls.descriptionContainer}
                        ${(newsText !== '')
            ? ''
            : cls.descriptionContainer_clear
        }
                    `}
            >
                <p className={cls.description}>
                    {textSliser({ text: newsText, number: 80 })}
                </p>
                <Button
                    theme={ThemeButton.NEWS}
                >
                    <BallIcon className={cls.ballIcon}/>
                    Читать продолжение
                </Button>
            </div>
        </div>
    /* <iframe  className={'iframe'} src={'https://lokobasket.com/stat-rfb/game/?id=778005&apiUrl=https://org.infobasket.su&lang=ru'} /> */
    )
}
