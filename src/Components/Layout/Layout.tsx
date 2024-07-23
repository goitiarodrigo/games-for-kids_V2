import { ReactNode } from 'react';

import Header from '@/Components/Header/Header';
import NavBar from '../NavBar/NavBar';
import FriendsList from '../FriendsList/FriendsList';

interface IProps {
    children: ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <div className="w-[100vw] h-[100vh]">
            <Header height="7vh" />
            <NavBar />
            <div className="bg-[#0C0D14] w-[100% - 60px] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center ml-[60px]">
                <FriendsList />
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
