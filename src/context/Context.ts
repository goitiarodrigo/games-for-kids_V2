import { createContext } from 'react';

interface IContext {
    setOpenModalLog: (value: boolean) => void;
    openModalLog: boolean;
    setTypeLog: (value: 'signin' | 'signup') => void;
    typeLog: 'signin' | 'signup';
}

export const Context = createContext<IContext>({} as IContext);
