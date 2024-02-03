import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GameBar.module.scss'
import { Game } from 'components/Game/Game'
import { Gif } from 'components/Gif/Gif'
import { GamesContext } from 'app/providers/GamesProvider/lib/GamesContext'
import { type FC, useContext, useEffect, useState } from 'react'
import { trimGames } from 'shared/lib/trimGames/trimGames'
import { type TeamGameData } from 'features/MainApi/types/TeamGamesData'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'

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
            <SectionTitle theme={SectionTitleTheme.POZ_MAIN}>
                Календарь
            </SectionTitle>
            <Gif />
            <ul className={cls.GameBar__widget}>
                {renderGames.map((game, index) => (
                    <li key ={index} className={cls.GameBar__item}>
                        <Game
                            game = {game} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
