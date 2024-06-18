import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-end bg-[#007200] border-b-[#004b23] border-b-4 h-[7vh]">
            <nav className="flex items-center justify-around w-[40%] text-white text-[1.2rem]">
                <Link to="/">Home</Link>
                <Link to="/highscore">Highscore</Link>
                <Link to="/login">Iniciar sesión</Link>
            </nav>
        </div>
    );
};

export default Header;
