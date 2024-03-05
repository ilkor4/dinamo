import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GameBar.module.scss'
import { Game } from 'components/Game/Game'
import { Gif } from 'components/Gif/Gif'
import { GamesContext } from 'app/providers/GamesProvider/lib/GamesContext'
import { type FC, useContext, useEffect, useState } from 'react'
import { trimGames } from 'shared/lib/trimGames/trimGames'
import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'
import { type ProtocolState } from 'app/providers/ProtocolProvider/lib/useProtocol'

interface GameBarProps {
    className?: string
    protocolState: ProtocolState
    setProtocolState: (protocolState: ProtocolState) => void
}
export const GameBar: FC<GameBarProps> = (props: GameBarProps) => {
    const {
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

    return (
        <section className={classNames(cls.GameBar, {}, [className ?? ''])}>
            <SectionTitle theme={SectionTitleTheme.POZ_MAIN}>
                Календарь
            </SectionTitle>
            <Gif />
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
