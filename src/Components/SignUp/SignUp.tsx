interface IProps {
    handleChange: (type: 'signin' | 'signup') => void;
}

const SignUp = ({ handleChange }: IProps) => {
    return (
        <>
            <div className="flex flex-col justify-around">
                <input name="name" placeholder="Nombre" type="text" />
                <input name="email" placeholder="Email" type="text" />
                <input name="password" placeholder="Contraseña" type="password" />
                <input placeholder="Repita contraseña" type="password" />
            </div>
            <span>Registrarse</span>
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
