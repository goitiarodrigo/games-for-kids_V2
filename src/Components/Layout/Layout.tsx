import React from 'react';

import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <div className="w-[100vw] h-[100vh]">
            <Header />
            <div className="bg-[url('./assets/background.jpg')] w-full h-[93vh] bg-center bg-no-repeat bg-cover flex items-center justify-center">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
