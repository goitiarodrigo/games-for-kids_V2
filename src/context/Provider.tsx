import React, { useState } from 'react';

import { Context } from './Context';

interface IProps {
    children: React.JSX.Element | React.JSX.Element[];
}

export const Provider = ({ children }: IProps) => {
    const [openModalLog, setOpenModalLog] = useState(false);
    const [typeLog, setTypeLog] = useState<'signin' | 'signup'>('signin');
    const [isInitializedGame, setIsInitializedGame] = useState(false);
    const [selectedGame, setSelectedGame] = useState('');

    return (
        <Context.Provider
            value={{
                openModalLog,
                setOpenModalLog,
                setTypeLog,
                typeLog,
                isInitializedGame,
                setIsInitializedGame,
                selectedGame,
                setSelectedGame,
            }}>
            {children}
        </Context.Provider>
    );
};
