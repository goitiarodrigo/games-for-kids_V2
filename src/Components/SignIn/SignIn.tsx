interface IProps {
    handleChange: (type: 'signin' | 'signup') => void;
}

const SignIn = ({ handleChange }: IProps) => {
    return (
        <>
            <div className="bg-[url('https://i.postimg.cc/wvWny03P/fondo-Login.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-between w-full h-full p-16">
                <div className="flex flex-col justify-around">
                    <input name="email" placeholder="Email" type="text" />
                    <input name="password" placeholder="Contraseña" type="password" />
                </div>
                <span>Iniciar sesión</span>
            </div>
            <span>
                No tiene cuenta?,{' '}
                <span
                    onClick={() => handleChange('signup')}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                    {' '}
                    registrese
                </span>
            </span>
        </>
    );
};

export default SignIn;
