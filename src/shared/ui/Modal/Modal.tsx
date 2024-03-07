import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React from 'react'

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const Modal = (props: ModalProps) => {
    const {
        onClose,
        isOpen
    } = props
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods = {
        [cls.opened]: isOpen
    }
    return (
        <div className={classNames(cls.Modal, mods, [])}>
            <div
                className={cls.Modal__overlay}
                onClick={onClose}
            >
                <div
                    className={cls.Modal__content}
                    onClick={onContentClick}
                >
                    В этом сезоне у нас бесплатный проход на арену,
                    поэтому вы можете ознакомиться с расписанием матчей в календаре
                    и прийти на игру во Дворец волейбола имени Увайса Ахтаева.
                </div>
            </div>
        </div>
    )
}
