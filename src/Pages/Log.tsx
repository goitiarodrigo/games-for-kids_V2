import { useContext, useState } from 'react';

import SignIn from '@/Components/SignIn/SignIn';
import SignUp from '@/Components/SignUp/SignUp';
import { Context } from '@/context/Context';

const Log = () => {
    const { typeLog, setTypeLog } = useContext(Context);
    const [className, setClassName] = useState('');

    const handleChange = (value: 'signin' | 'signup') => {
        setClassName('ease-in-out transition !duration-1000 [transform:rotateY(360deg)]');
        setTimeout(() => {
            setTypeLog(value);
            setClassName('');
        }, 590);
    };

    return (
        <div
            className={`${className} bg-[url('https://i.postimg.cc/wvWny03P/fondo-Login.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-between w-[50rem] h-[40rem] pt-[12rem] pr-[13rem] pb-[2rem] pl-[13.5rem] custom-drop-shadow`}>
            {typeLog == 'signup' ? (
                <SignUp handleChange={handleChange} />
            ) : (
                <SignIn handleChange={handleChange} />
            )}
        </div>
    );
};

export default Log;
