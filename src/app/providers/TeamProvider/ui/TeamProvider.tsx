import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import {mainApi} from "features/MainApi/MainApi";
import {TeamContext} from "app/providers/TeamProvider/lib/TeamContext";

interface TeamProviderProps {
    children: ReactNode;
}
export const TeamProvider: FC<TeamProviderProps> = ({children}) => {
    const [teamRoaster, setTeamRoaster] = useState<TeamRoasterData | null>(null);

    const fetchTeamRoaster = useCallback(async () => {
        return mainApi.getTeamRoaster();
    }, []);

    useEffect(() => {
        fetchTeamRoaster()
            .then((roaster) => setTeamRoaster(roaster))
            .catch((err) => console.log(err));
    }, [fetchTeamRoaster]);
    return (
        <TeamContext.Provider value={teamRoaster}>
            {children}
        </TeamContext.Provider>
    );
};