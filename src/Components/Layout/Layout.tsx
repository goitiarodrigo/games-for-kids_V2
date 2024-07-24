import { ReactNode } from 'react';

import Header from '@/Components/Header/Header';
import NavBar from '../NavBar/NavBar';
import FriendsList from '../FriendsList/FriendsList';

interface IProps {
    children: ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll">
            <Header height="8vh" />
            <NavBar />
            <div className="bg-[#0C0D14] w-[100% - 60px] min-h-[92vh] bg-center bg-no-repeat bg-cover flex flex-col items-center ml-[60px]">
                <FriendsList />
                <div className="flex items-center justify-center h-[90%] w-full">{children}</div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
