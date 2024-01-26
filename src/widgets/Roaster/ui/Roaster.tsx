import {classNames} from "shared/lib/classNames/classNames";
import cls from './Roaster.module.scss'
import {Person} from "components/Person/Person";

interface RoasterProps {
    className?: string;
    players: Player[];
}
export const Roaster = (props: RoasterProps) => {
    const { players, className} = props;

    return (
        <ul className={classNames(cls.Roaster, {}, [className])}>
            {players && players.map((person, index) => {
                    return (
                        <Person person={person}/>
                    )
                }
            )};
        </ul>
    );
};