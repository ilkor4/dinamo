import {classNames} from "shared/lib/classNames/classNames";
import cls from './Game.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import StatIcon from "shared/assets/icons/stat-icon.svg";

interface GameProps {
    className?: string;
    game: TeamGameData;
}
export const Game = (props: GameProps) => {
    const { game, className} = props;

    const {
        DisplayDateTimeMsk,
        TeamLogoA,
        TeamLogoB,
        ScoreA,
        ScoreB
    } = game;
    
    return (
        <div className={classNames(cls.Game, {}, [className])}>
            <h3 className={cls.title}>{DisplayDateTimeMsk}</h3>
            <div className={cls.gameContainer}>
                <div
                    style={{backgroundImage: `url(${TeamLogoA})`}}
                    className={cls.firstTeamImage}
                />
                <div className={cls.score}>
                    {`${ScoreA} : ${ScoreB}` }
                </div>
                <div
                    style={{backgroundImage: `url(${TeamLogoB})`}}
                    className={cls.secondTeamImage}
                />
            </div>
            <Button
                theme={ThemeButton.GAME}
            >
                <StatIcon className={cls.statIcon}/>
                Полная статистика матча
            </Button>
        </div>
    );
};