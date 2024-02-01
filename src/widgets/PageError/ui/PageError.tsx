import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { type FC } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className ?? ''])}>
            <p className={cls.PageError__text}>Произошла ошибка</p>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={reloadPage}
            >
                Обновить страницу
            </Button>
        </div>
    )
}
