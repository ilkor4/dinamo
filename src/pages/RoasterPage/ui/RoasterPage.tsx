import {useContext} from "react";
import {TeamContext} from "app/providers/TeamProvider/lib/TeamContext";
import {Roaster} from "widgets/Roaster";

export default function RoasterPage () {
    const teamRoaster = useContext<TeamRoasterData>(TeamContext);
    const { Players, Coaches, Staff } =  teamRoaster || {};
    return(
        <div className="roaster">
            {<Roaster players={Players}/>}
        </div>
    )
}