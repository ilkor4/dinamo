import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GameBar.module.scss'
import { Game } from 'components/Game/Game'
import { Gif } from 'components/Gif/Gif'
import { GamesContext } from 'app/providers/GamesProvider/lib/GamesContext'
import { type FC, useContext, useEffect, useState } from 'react'
import { trimGames } from 'shared/lib/trimGames/trimGames'

interface GameBarProps {
    className?: string
}
export const GameBar: FC<GameBarProps> = ({ className }) => {
    const gamesArray = useContext(GamesContext)
    const [renderGames, setRenderGames] = useState<TeamGameData[]>([])

    useEffect(() => {
        if (gamesArray.length !== 0) {
            setRenderGames(trimGames(gamesArray))
        }
    }, [gamesArray])

    return (
        <section className={classNames(cls.GameBar, {}, [className ?? ''])}>
            <Gif />
            <ul className={cls.widget}>
                {renderGames.map((game, index) => (
                    <li key ={index}>
                        <Game
                            game = {game} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
