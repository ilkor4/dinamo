import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Game.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import StatIcon from 'shared/assets/icons/stat-icon.svg'
import React, { type FC } from 'react'
import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'
import { useProtocol } from 'app/providers/ProtocolProvider'
import { type ProtocolState } from 'app/providers/ProtocolProvider/lib/useProtocol'

interface GameProps {
    className?: string
    game: TeamGameData
    protocolState: ProtocolState
    setProtocolState: (protocolState: ProtocolState) => void
}
export const Game: FC<GameProps> = (props) => {
    const { game, className, setProtocolState, protocolState } = props

    const {
        GameID,
        DisplayDateTimeMsk,
        TeamLogoA,
        TeamLogoB,
        ScoreA,
        ScoreB
    } = game

    const onStatOpen = (): void => {
        setProtocolState({ ...protocolState, isOpen: true, gameId: GameID, gameInfo: game })
        console.log(protocolState)
    }

    return (
        <article className={classNames(cls.Game, {}, [className ?? ''])}>
            <h3 className={cls.Game__title}>{DisplayDateTimeMsk}</h3>
            <div className={cls.Game__gameContainer}>
                <div
                    style={{ backgroundImage: `url(${TeamLogoA})` }}
                    className={cls.Game__teamImage}
                />
                <div className={cls.Game__score}>
                    {`${ScoreA} : ${ScoreB}` }
                </div>
                <div
                    style={{ backgroundImage: `url(${TeamLogoB})` }}
                    className={cls.Game__teamImage}
                />
            </div>
            <Button
                onClick={onStatOpen}
                theme={ThemeButton.POZ_GAME}
            >
                <StatIcon className={cls.Game__statIcon}/>
                Полная статистика матча
            </Button>
        </article>
    )
}
