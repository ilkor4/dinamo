import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PersonProtocol.module.scss'
import { type GamePlayer } from 'features/MainApi/types/GameData'

export const PersonProtocol: FC<GamePlayer> = (PersonProtocol) => {
    const {
        PlayerNumber, PersonID, PersonNameRu,
        PlayedTime, Points, Shots1, Shots2, Shots3,
        Goal2, Goal3, Shot2, Shot3, DefRebound,
        OffRebound, Rebound, Assist, Steal,
        Turnover, Blocks, Foul, OpponentFoul,
        PlusMinus
    } = PersonProtocol

    return (
        <tr className={classNames(cls.protocol)}>
            <td className={cls.PersonProtocol__item}>
                <div
                    className={cls.PersonProtocol__shirt}
                    style={{
                        backgroundImage: `url(https://russiabasket.ru/games/uniform?number=${
                            PlayerNumber
                        }&amp;color1=%23FFFFFF&amp;color2=%23000000&amp;color3=%23000000)`
                    }}
                />
            </td>
            <td className={cls.PersonProtocol__item}>
                <div
                    className={cls.PersonProtocol__image}
                    style={{
                        backgroundImage: `url(https://org.infobasket.su/Widget/GetPersonPhoto/${
                            PersonID
                        }?d=1&amp;compId=42738&amp;teamId=758)`
                    }}
                />
            </td>
            <td className={cls.PersonProtocol__item}>{PersonNameRu}</td>
            <td className={cls.PersonProtocol__item}>{PlayedTime !== null && PlayedTime}</td>
            <td className={cls.PersonProtocol__item}>{Points !== null && Points}</td>
            <td className={cls.PersonProtocol__item}>{Shots2 !== null && Shots2}</td>
            <td className={cls.PersonProtocol__item}>{Shots3 !== null && Shots3}</td>
            <td className={cls.PersonProtocol__item}>{ ((Shot2! | Shot3!) !== null) &&
                `${Goal2! + Goal3!}/${Shot2! + Shot3!}`
            }</td>
            <td className={cls.PersonProtocol__item}>{Shots1 !== null && Shots1}</td>
            <td className={cls.PersonProtocol__item}>{DefRebound !== null && DefRebound}</td>
            <td className={cls.PersonProtocol__item}>{OffRebound !== null && OffRebound}</td>
            <td className={cls.PersonProtocol__item}>{Rebound !== null && Rebound}</td>
            <td className={cls.PersonProtocol__item}>{Assist !== null && Assist}</td>
            <td className={cls.PersonProtocol__item}>{Steal !== null && Steal}</td>
            <td className={cls.PersonProtocol__item}>{Turnover !== null && Turnover}</td>
            <td className={cls.PersonProtocol__item}>{Blocks !== null && Blocks}</td>
            <td className={cls.PersonProtocol__item}>{Foul !== null && Foul}</td>
            <td className={cls.PersonProtocol__item}>{OpponentFoul !== null && OpponentFoul}</td>
            <td className={cls.PersonProtocol__item}>{PlusMinus !== null && PlusMinus}</td>
        </tr>
    )
}
