import { createContext } from 'react';

export interface IFetchGame {
    genre: boolean;
    name: string;
    path: string;
    svg: string;
}

interface IContext {
    setOpenModalLog: (value: boolean) => void;
    openModalLog: boolean;
    setTypeLog: (value: 'signin' | 'signup') => void;
    typeLog: 'signin' | 'signup';
    setIsInitializedGame: (value: boolean) => void;
    isInitializedGame: boolean;
    setSelectedGame: (value: string) => void;
    selectedGame: string;
    fetchGames: (value: IFetchGame) => void;
    fetchGamesByTypes: () => void;
    games: any[] | undefined;
    gamesByTypes: any[];
    loading: boolean;
    fetchAnyGame: (game: string) => Promise<any>;
}

export const Context = createContext<IContext>({} as IContext);
