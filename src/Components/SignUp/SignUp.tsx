interface IProps {
    handleChange: (type: 'signin' | 'signup') => void;
}

const SignUp = ({ handleChange }: IProps) => {
    return (
        <>
            <div className="bg-[url('https://i.postimg.cc/wvWny03P/fondo-Login.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-between w-4/5 h-4/5 p-16">
                <input name="name" placeholder="Nombre" type="text" />
                <input name="email" placeholder="Email" type="text" />
                <input name="password" placeholder="Contraseña" type="password" />
                <input placeholder="Repita contraseña" type="password" />
                <span>Registrarse</span>
            </div>
            <span>
                Ya tiene cuenta?,{' '}
                <span
                    onClick={() => handleChange('signin')}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                    {' '}
                    inicie sesión
                </span>
            </span>
        </>
    );
};

export default SignUp;
