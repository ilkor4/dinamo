import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Lead.module.scss'
import LeadImage from 'shared/assets/images/lead-image.jpg'
import { Video } from 'entities/Video/Video'
import { type FC } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { HashLink } from 'react-router-hash-link'

interface LeadProps {
    className?: string
}
export const Lead: FC<LeadProps> = ({ className }) => {
    return (
        <section
            className={classNames(cls.Lead, {}, [className ?? ''])}
            style={{ backgroundImage: `url(${LeadImage})` }}
        >
            <div className={cls.Lead__description}>
                <h1 className={cls.Lead__title}>
                    Баскетбольный Клуб «Динамо» Грозный</h1>
                <HashLink to="#gameBar">
                    <Button theme={ThemeButton.POZ_LEAD}>
                        <svg
                            className={cls.Lead__svg}
                            viewBox="0 0 180 60"
                        >
                            <polyline
                                className={cls.Lead__line}
                                points="179,1 179,59 1,59 1,1 179,1"
                            />
                        </svg>
                        Смотреть
                    </Button>
                </HashLink>
            </div>
            <Video />
        </section>
    )
}
