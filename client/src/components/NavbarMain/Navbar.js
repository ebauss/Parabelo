import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/Parabelo - Logo.png';

// [{Name of Button}, {path}]
const pages = [['Pricing', 'pricing']];

export default function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const logIn = () => loginWithRedirect();
    const signUp = () => loginWithRedirect({ screen_hint: 'signup' });

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ backgroundColor: '#398870' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Box
                            component="img"
                            src={logo}
                            sx={{
                                width: 150,
                                mr: 2,
                                mb: 0.5,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        />
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page[1]} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link to={`/${page[1]}`} style={{ textDecoration: 'none', color: "black" }}>
                                            {page[0]}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem
                                key="0"
                                onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    onClick={logIn}>
                                    Log In
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                key="1"
                                onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    onClick={signUp}>
                                    Sign Up
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Link to="/">
                        <Box
                            component="img"
                            src={logo}
                            sx={{
                                width: 150,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        />
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            justifyContent: 'flex-end'
                        }}>
                        <IconButton
                            size="large"
                            color="primary"
                        ></IconButton>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        {pages.map((page) => (
                            <Button
                                key={page[1]}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block'
                                }}
                            >
                                <Link
                                    to={`/${page[1]}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: "white"
                                    }}>
                                    {page[0]}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        <Button
                            variant="text"
                            size="large"
                            onClick={logIn}
                            color="inherit"
                            sx={{ mr: 2 }}>
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={signUp}
                            color="secondary"
                        >
                            Get Started For Free!
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
