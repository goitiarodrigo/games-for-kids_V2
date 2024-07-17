import { Link, useNavigate } from 'react-router-dom';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import { IconButton } from '@mui/material';

const Header = () => {
    const navigate = useNavigate();

    function handleCloseSesion() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className="flex items-center justify-end bg-[#007200] border-b-[#004b23] border-b-4 h-[7vh]">
            <nav className="flex items-center justify-around w-[40%] text-white text-[1.2rem]">
                <Link to="/">Home</Link>
                <Link to="/highscore">Mejores puntuaciones</Link>
                <Link to="/games">Juegos</Link>
                {localStorage.getItem('user') ? (
                    <Link to="/login">Iniciar sesión</Link>
                ) : (
                    <IconButton
                        // edge="end"
                        // aria-label="delete"
                        // color="primary"
                        // title="Delete"
                        className="!hover:bg-red-900"
                        onClick={handleCloseSesion}>
                        <PowerOffIcon sx={{ color: 'white' }} />
                    </IconButton>
                )}
            </nav>
        </div>
    );
};

export default Header;
