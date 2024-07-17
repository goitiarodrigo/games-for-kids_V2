import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
} from '@mui/material';
import { MouseEvent, useState } from 'react';

interface IProps {
    handleChange: (type: 'signin' | 'signup') => void;
}

const SignUp = ({ handleChange }: IProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="flex flex-col justify-around h-3/4">
                <TextField
                    color="success"
                    label="Usuario"
                    sx={{ backgroundColor: 'white' }}
                    variant="filled"
                />
                <TextField
                    color="success"
                    label="Correo"
                    sx={{ backgroundColor: 'white' }}
                    variant="filled"
                />
                <FormControl sx={{ backgroundColor: 'white' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
                    <FilledInput
                        color="success"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        id="filled-adornment-password"
                        sx={{ backgroundColor: 'white' }}
                        type={showPassword ? 'text' : 'password'}
                    />
                </FormControl>
                <FormControl sx={{ backgroundColor: 'white' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
                    <FilledInput
                        color="success"
                        id="filled-adornment-password"
                        sx={{ backgroundColor: 'white' }}
                        type={showPassword ? 'text' : 'password'}
                    />
                </FormControl>
            </div>
            <LoadingButton
                className={loading ? '!bg-loading-color' : '!bg-us-primary'}
                loading={loading}
                loadingPosition="start"
                onClick={handleClick}
                variant="contained">
                <span>Registrarse</span>
            </LoadingButton>

            <span className="!text-us-primary text-end">
                Ya tiene cuenta?,{' '}
                <span
                    className="!tracking-widest"
                    onClick={() => handleChange('signin')}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                    {' '}
                    INICIE SESIÓN
                </span>
            </span>
        </>
    );
};

export default SignUp;
