import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useContext, useState } from 'react';

import { typesGamesES } from '@/routes/constants.routes';
import { URL_IMAGES_CG } from '../../../constants';
import { Context } from '@/context/Context';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const { fetchGames } = useContext(Context);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div className="w-full bg-[#0C0D14]">
            <SwipeableDrawer
                ModalProps={{
                    keepMounted: true,
                }}
                anchor="left"
                disableSwipeToOpen={false}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                open={open}
                sx={{
                    '& .MuiPaper-root': {
                        marginTop: '7vh',
                    },
                }}>
                <Box
                    onMouseLeave={toggleDrawer(false)}
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        backgroundColor: '#0C0D14',
                        paddingTop: '10px',
                        maxHeight: '93vh',
                    }}>
                    {typesGamesES.map((el) => (
                        <span
                            className="flex text-white"
                            key={el.name}
                            onClick={() => fetchGames(el)}>
                            <img alt={el.name} src={`${URL_IMAGES_CG}icon/${el.svg}`} />
                            <span className="pl-5 cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:text-gray-400">
                                {el.name}
                            </span>
                        </span>
                    ))}
                </Box>
            </SwipeableDrawer>
            <Box
                onMouseEnter={toggleDrawer(true)}
                sx={{
                    position: 'absolute',
                    zIndex: open ? 0 : 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    paddingLeft: 1,
                    width: 60,
                    overflowY: 'scroll',
                    transform: open ? 'translateX(-100%)' : 'translateX(0)',
                    transition: 'transform 0.2s ease-in-out',
                    backgroundColor: '#0C0D14',
                    paddingTop: '10px',
                }}>
                {typesGamesES.map((el) => {
                    return (
                        <span key={el.name}>
                            <img alt={el.name} src={`${URL_IMAGES_CG}icon/${el.svg}`} />
                        </span>
                    );
                })}
            </Box>
        </div>
    );
};

export default NavBar;
