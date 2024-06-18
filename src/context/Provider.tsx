import React, { useState } from 'react';

import { Context } from './Context';

interface IProps {
    children: React.JSX.Element | React.JSX.Element[];
}

export const Provider = ({ children }: IProps) => {
    const [openModalLog, setOpenModalLog] = useState(false);
    const [typeLog, setTypeLog] = useState<'signin' | 'signup'>('signin');

    return (
        <Context.Provider
            value={{
                openModalLog,
                setOpenModalLog,
                setTypeLog,
                typeLog,
            }}>
            {children}
        </Context.Provider>
    );
};
