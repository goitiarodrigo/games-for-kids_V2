import { useContext, useState } from 'react';

import SignIn from '@/Components/SignIn/SignIn';
import SignUp from '@/Components/SignUp/SignUp';
import { Context } from '@/context/Context';

const Log = () => {
    const { typeLog, setTypeLog } = useContext(Context);
    const [className, setClassName] = useState('');

    const handleChange = (value: 'signin' | 'signup') => {
        setClassName(
            'ease-in-out transition !duration-1000 [transform:rotateY(360deg)] flex items-center justify-center w-full h-full'
        );
        setTimeout(() => {
            setTypeLog(value);
            setClassName('');
        }, 590);
    };

    return (
        <div className="fixed shadow-2xl shadow-gray-950 top-[25-vh] left-[40vw] flex justify-center items-center bg-[url('https://image.freepik.com/vector-gratis/fondo-selva-dibujos-animados_23-2148936119.jpg')] bg-center bg-no-repeat bg-cover p-0 w-[28%] h-[50%] z-50">
            <div
                className={`${className} w-full h-full flex flex-col items-center justify-center p-16`}>
                {typeLog == 'signup' ? (
                    <SignUp handleChange={handleChange} />
                ) : (
                    <SignIn handleChange={handleChange} />
                )}
            </div>
        </div>
    );
};

export default Log;
