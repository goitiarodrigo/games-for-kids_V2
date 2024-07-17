import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MouseEvent, useState } from 'react';
import { LoadingButton } from '@mui/lab';

interface IProps {
    handleChange: (type: 'signin' | 'signup') => void;
}

const SignIn = ({ handleChange }: IProps) => {
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
            </div>
            <LoadingButton
                className={loading ? '!bg-loading-color' : '!bg-us-primary'}
                loading={loading}
                loadingPosition="start"
                onClick={handleClick}
                variant="contained">
                <span>Conectarse</span>
            </LoadingButton>
            <span className="!text-us-primary text-end">
                No tiene cuenta?,{' '}
                <span
                    className="!tracking-widest"
                    onClick={() => handleChange('signup')}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                    {' '}
                    REGISTRESE
                </span>
            </span>
        </>
    );
};

export default SignIn;
