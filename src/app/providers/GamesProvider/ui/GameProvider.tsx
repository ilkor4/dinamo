import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import {mainApi} from "features/MainApi/MainApi";
import {GamesContext} from "../lib/GamesContext";


interface GameProviderProps {
    children: ReactNode;
}
export const GameProvider :FC<GameProviderProps> = ({children})  => {
    const [games, setGames] = useState<TeamGameData[]>([])

    const fetchGames = useCallback(async () => {
        return await mainApi.getTeamGames()
    }, [])

    useEffect(() => {
        fetchGames()
            .then((games) => setGames(games))
            .catch((err) => console.log(err));
    }, [fetchGames]);

    return (
        <GamesContext.Provider value={games}>
            {children}
        </GamesContext.Provider>
    );
};