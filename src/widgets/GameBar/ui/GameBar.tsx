import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GameBar.module.scss'
import { Game } from 'entities/Game/Game'
import { Gif } from 'entities/Gif/Gif'
import { GamesContext } from 'app/providers/GamesProvider/lib/GamesContext'
import { type FC, useContext, useEffect, useState } from 'react'
import { trimGames } from 'shared/lib/trimGames/trimGames'
import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'
import { type ProtocolState } from 'app/providers/ProtocolProvider/lib/useProtocol'

interface GameBarProps {
    className?: string
    isVertical: boolean
    protocolState: ProtocolState
    setProtocolState: (protocolState: ProtocolState) => void
}
export const GameBar: FC<GameBarProps> = (props: GameBarProps) => {
    const {
        isVertical,
        className,
        setProtocolState,
        protocolState
    } = props
    const gamesArray = useContext(GamesContext)
    const [renderGames, setRenderGames] = useState<TeamGameData[]>([])

    useEffect(() => {
        if (gamesArray.length !== 0) {
            setRenderGames(trimGames(gamesArray))
        }
    }, [gamesArray])

    const mods: Record<string, boolean> = {
        [cls.vertical]: isVertical
    }

    return (
        <section
            className={classNames(cls.GameBar, mods, [className ?? ''])} id="gameBar"
        >
            <SectionTitle theme={SectionTitleTheme.POZ_MAIN}>
                Календарь
            </SectionTitle>
            <Gif className={cls.GameBar__gif}/>
            <ul className={cls.GameBar__widget}>
                {renderGames.map((game, index) => (
                    <li key ={index} className={cls.GameBar__item}>
                        <Game
                            game = {game}
                            setProtocolState = {setProtocolState}
                            protocolState = {protocolState}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
