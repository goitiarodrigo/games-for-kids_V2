import { createContext } from 'react';

interface IContext {
    setOpenModalLog: (value: boolean) => void;
    openModalLog: boolean;
    setTypeLog: (value: 'signin' | 'signup') => void;
    typeLog: 'signin' | 'signup';
    setIsInitializedGame: (value: boolean) => void;
    isInitializedGame: boolean;
    setSelectedGame: (value: string) => void;
    selectedGame: string;
}

export const Context = createContext<IContext>({} as IContext);
