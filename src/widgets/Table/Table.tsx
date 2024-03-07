import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Table.module.scss'
import { type FC } from 'react'
import { type GameTeam } from 'features/MainApi/types/GameData'
import { SectionTitle, SectionTitleTheme } from 'shared/ui/SectionTitle/SectionTitle'
import { PersonProtocol } from 'entities/PersonProtocol/PersonProtocol'

interface TableProps {
    gameData: GameTeam
    logoTeam: string
    nameTeam: string
}
export const Table: FC<TableProps> = (props: TableProps) => {
    const {
        logoTeam,
        nameTeam,
        gameData
    } = props

    const {
        PlayedTime, Score, Shots1, Shots2, Shots3,
        Shot1Percent, Shot2Percent, Shot3Percent,
        DefRebound, OffRebound, Rebound,
        Assist, Steal, Turnover, Blocks, Foul,
        OpponentFoul, Goal2, Goal3, Shot2, Shot3, Players
    } = gameData

    return (
        <div className={cls.Table}>
            <div className={cls.Table__heading}>
                <img className={cls.Table__logo} src={logoTeam} alt={nameTeam}/>
                <SectionTitle
                    className={classNames(cls.Table__team)}
                    theme={SectionTitleTheme.CLEAR}
                >
                    {nameTeam}
                </SectionTitle>
            </div>
            <table className={cls.Table__container}>
                <thead>
                    <tr className={cls.Table__row}>
                        <th rowSpan={2} colSpan={3} className={cls.Table__title}>Игроки</th>
                        <th rowSpan={2} title="Сыгранное время" className={cls.Table__title}>
                                СВ
                        </th>
                        <th rowSpan={2} title="Набранные очки" className={cls.Table__title}>
                                Очки
                        </th>
                        <th colSpan={4} className={cls.Table__title}>Броски</th>
                        <th colSpan={3} className={cls.Table__title}>Подборы</th>
                        <th rowSpan={2} title="Голевые передачи" className={cls.Table__title}>
                                ГП
                        </th>
                        <th rowSpan={2} title="Перехваты" className={cls.Table__title}>ПХ</th>
                        <th rowSpan={2} title="Потери" className={cls.Table__title}>ПТ</th>
                        <th rowSpan={2} title="Блокшоты" className={cls.Table__title}>БШ</th>
                        <th rowSpan={2} title="Фолы" className={cls.Table__title}>Ф</th>
                        <th rowSpan={2}
                            title="Фолы соперника"
                            className={cls.Table__title}
                        >
                                ФС
                        </th>
                        <th rowSpan={2} title="Плюс/минус" className={cls.Table__title}>+/-</th>
                    </tr>
                    <tr className={cls.Table__row}>
                        <th title="Двухочковые броски" className={cls.Table__title}>2-очк</th>
                        <th title="Трехочковые броски" className={cls.Table__title}>3-очк</th>
                        <th title="Броски с игры" className={cls.Table__title}>И</th>
                        <th title="Штрафные броски" className={cls.Table__title}>ШБ</th>
                        <th title="Подборы на своем щите" className={cls.Table__title}>СЩ</th>
                        <th title="Подборы на чужом щите" className={cls.Table__title}>ЧЩ</th>
                        <th title="Подборы всего" className={cls.Table__title}>ВС</th>
                    </tr>
                </thead>
                <tbody>
                    {Players.map(({ ...playerProps }, index) => (
                        <PersonProtocol {...playerProps} key={index}/>
                    )
                    )}
                </tbody>
                <tfoot>
                    <tr className={cls.Table__row}>
                        <td className={cls.Table__item} colSpan={3}>ВСЕГО:</td>
                        <td className={cls.Table__item}>{PlayedTime}</td>
                        <td className={cls.Table__item}>{Score}</td>
                        <td className={cls.Table__item}>{Shots2} <br/>{Shot2Percent}%</td>
                        <td className={cls.Table__item}>{Shots3} <br/>{Shot3Percent}%</td>
                        <td className={cls.Table__item}>{Goal2 + Goal3}/{Shot2 + Shot3}
                            <br/>{((Goal2 + Goal3) * 100 / (Shot2 + Shot3)).toFixed(1)}%
                        </td>
                        <td className={cls.Table__item}>{Shots1} <br/>{Shot1Percent}%</td>
                        <td className={cls.Table__item}>{DefRebound}</td>
                        <td className={cls.Table__item}>{OffRebound}</td>
                        <td className={cls.Table__item}>{Rebound}</td>
                        <td className={cls.Table__item}>{Assist}</td>
                        <td className={cls.Table__item}>{Steal}</td>
                        <td className={cls.Table__item}>{Turnover}</td>
                        <td className={cls.Table__item}>{Blocks}</td>
                        <td className={cls.Table__item}>{Foul}</td>
                        <td className={cls.Table__item}>{OpponentFoul}</td>
                        <td className={cls.Table__item}></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
