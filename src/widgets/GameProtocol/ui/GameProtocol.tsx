import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GameProtocol.module.scss'
import React, { type FC } from 'react'
import { type ProtocolState } from 'app/providers/ProtocolProvider/lib/useProtocol'
import { Table } from 'widgets/Table/Table'
import { Loader } from 'shared/ui/Loader/Loader'

interface GameProtocolProps {
    protocolState: ProtocolState
    setProtocolState: (protocolState: ProtocolState) => void
    className?: string
}
export const GameProtocol: FC<GameProtocolProps> = (props) => {
    const {
        protocolState,
        setProtocolState,
        className
    } = props

    const mods: Record<string, boolean> = {
        [cls.opened]: protocolState.isOpen
    }

    const closePopup = () => {
        setProtocolState({
            ...protocolState,
            gameId: null,
            gameData: null,
            gameInfo: null,
            isOpen: false
        })
        console.log(protocolState)
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <div className={classNames(cls.GameProtocol, mods, [className ?? ''])}>
            <div
                className={cls.GameProtocol__overlay}
                onClick={closePopup}
            >
                <div
                    className={cls.GameProtocol__content}
                    onClick={onContentClick}
                >
                    {
                        (protocolState.gameInfo !== null && protocolState.gameData !== null)
                            ? <>
                                <Table
                                    gameData={protocolState.gameData.GameTeams[0]}
                                    logoTeam={protocolState.gameInfo.TeamLogoA}
                                    nameTeam={protocolState.gameInfo.TeamNameAru}
                                />
                                <Table
                                    gameData={protocolState.gameData.GameTeams[1]}
                                    logoTeam={protocolState.gameInfo.TeamLogoB}
                                    nameTeam={protocolState.gameInfo.TeamNameBru}
                                />
                            </>
                            : <Loader />
                    }
                </div>
            </div>
        </div>
    )
}
