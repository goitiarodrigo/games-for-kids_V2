import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="fixed bottom-[3vh] h-[13vh] w-full bg-[#007200] flex justify-around items-center border-b-[#004b23] border-t-[#004b23] border-t-4 border-b-4">
            {/* <div className="profilePhoto">
            </div> */}
            <nav className="flex justify-between w-[40%] no-underline text-white text-[1.2rem]">
                <Link to="/">Home</Link>
                <Link to="/juegos">Juegos</Link>
                <Link to="/signup">Registrarse</Link>
                <Link to="/signin">Iniciar sesión</Link>
            </nav>
            {/* <p>Todos los derechos reservados Rodrigo Goitia 2024</p> */}
        </div>
    );
};

export default Footer;
