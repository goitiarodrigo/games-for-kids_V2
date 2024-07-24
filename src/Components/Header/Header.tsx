import { Link, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import Logo from '../../assets/logo.png';
import SearchComponent from '../SearchComponent/SearchComponent';

interface IProps {
    height: string;
}

const drawerWidth = 240;
const navItems = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Mejores puntuaciones',
        link: '/highscore',
    },
    {
        name: 'Juegos',
        link: '/games',
    },
];

const Header = ({ height }: IProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleCloseSesion = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img className="w-[80px] !cursor-pointer" onClick={() => navigate('/')} src={Logo} />
            <Typography sx={{ my: 2, cursor: 'pointer' }} variant="h6">
                Play4Fun
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem disablePadding key={item.link}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                height,
                zIndex: 999999999,
            }}>
            <AppBar className="h-[8vh]" component="nav">
                <Toolbar className="bg-[#1f2030] h-full">
                    <IconButton
                        aria-label="open drawer"
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <img
                        className="w-[80px] !cursor-pointer"
                        onClick={() => navigate('/')}
                        src={Logo}
                    />
                    <Typography
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block', cursor: 'pointer' },
                        }}
                        variant="h6">
                        Play4Fun
                    </Typography>
                    <div className="w-[60%] ml-3">
                        <SearchComponent />
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.link} sx={{ color: '#fff' }}>
                                <Link to={item.link}>{item.name}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className="h-full">
                <Drawer
                    ModalProps={{
                        keepMounted: true,
                    }}
                    onClose={handleDrawerToggle}
                    open={mobileOpen}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    variant="temporary">
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Header;
