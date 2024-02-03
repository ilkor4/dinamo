import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SectionTitle.module.scss'
import { type FC, type ReactNode } from 'react'

export const enum SectionTitleTheme {
    CLEAR = 'SectionTitle_clear',
    POZ_MAIN = 'SectionTitle_poz_main',
    POZ_ROASTER = 'SectionTitle_poz_roaster',
}

interface SectionTitleProps {
    theme: SectionTitleTheme
    className?: string
    children: ReactNode
}
export const SectionTitle: FC<SectionTitleProps> = ({ theme, className, children }) => {
    return (
        <h2 className={classNames(cls.SectionTitle, {}, [cls[theme]])}>
            {children}
        </h2>
    )
}
