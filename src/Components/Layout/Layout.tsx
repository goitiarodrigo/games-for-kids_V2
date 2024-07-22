import { ReactNode } from 'react';

import Header from '@/Components/Header/Header';
import NavBar from '../NavBar/NavBar';

interface IProps {
    children: ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <div className="w-[100vw] h-[100vh]">
            <Header height="7vh" />
            <NavBar />
            <div className="bg-[url('./assets/background.jpg')] w-[100% - 60px] h-[93vh] bg-center bg-no-repeat bg-cover flex items-center justify-center ml-[60px]">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
