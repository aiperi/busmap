import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../../assets/images/APTOSH_logo.png";
import PreviewIcon from '@mui/icons-material/Preview';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {busStops, releases, reports, rides, routes, tracking} from "../../../paths";
import {Link, useLocation, useNavigate} from "react-router-dom";

const AppToolBar = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let pathname = location.pathname
    const pages = [
        {name: 'Остановки', route: busStops},
        {name: 'Маршруты', route: routes},
        {name: 'Выпуски', route: releases},
        {name: 'Рейсы', route: rides},
        {name: 'Слежение', route: tracking},
        {name: 'Отчеты', route: reports}
    ];

    const dropLinks = ['Обзор', 'Настройки пользователя', 'Ключи API', 'Документация', 'Что нового', 'Выход'];
    const icons = [<PreviewIcon/>, <SettingsIcon/>, <KeyIcon/>, <TextSnippetIcon/>, <TipsAndUpdatesIcon/>,
        <ExitToAppIcon/>]
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static"
                style={{backgroundColor: "#15416c"}}
        >
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img style={{width: "130px", height: "auto"}}
                             src={logo} alt="aptosh-logo"/>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none',}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}
                                          sx={{'.Mui-selected': {color: 'red'}}}>
                                    <Typography
                                        textAlign="center"
                                        component={Link}
                                        to={page.route}
                                        sx={{textDecoration: 'none', color: 'black'}}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img style={{width: "140px", height: "auto"}}
                             src={logo} alt="aptosh-logo"/>
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: "right",
                        marginRight: "10px"
                    }}>
                        {pages.map(page => (
                            <Button
                                key={page.name}
                                onClick={() => navigate(page.route)}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    color: 'white',
                                    borderBottom: page.route === pathname ? '2px solid white' : 'none'
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Открыть профиль">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {dropLinks.map((links, index) => (
                                <MenuItem key={links} onClick={handleCloseUserMenu}>

                                    <Typography
                                        textAlign="center"
                                        style={{
                                            color: "#166767",
                                            display: "flex",
                                            alignItems: 'center'
                                        }
                                        }
                                    >
                                        <span style={{paddingRight: '5px', fontSize: '9px'}}>{icons[index]}</span>
                                        <p style={{fontSize: "15px", lineHeight: "15px"}}> {links}</p>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default AppToolBar;