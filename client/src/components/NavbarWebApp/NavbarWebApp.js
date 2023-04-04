import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import NotesIcon from '@mui/icons-material/Notes';
import EditIcon from '@mui/icons-material/Edit';
import CopyrightIcon from '@mui/icons-material/Copyright';
import DescriptionIcon from '@mui/icons-material/Description';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Tooltip } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { LinearProgress } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import HelpIcon from '@mui/icons-material/Help';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function NavbarWebApp() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { logout } = useAuth0();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/app' style={{ textDecoration: 'none', color: "white" }}>
                            <Typography variant="h6" noWrap component="div">
                                Parabelo
                            </Typography>
                        </Link>
                    </Box>
                    {/* <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
                        <Typography variant="p">Word Count</Typography>
                        <LinearProgress variant="determinate" value={50} sx={{ width: {xs: 100, md: 300} }} color="secondary" />
                    </Box> */}
                    <Box>
                        <Link to="/app/settings" style={{ textDecoration: 'none', color: "white" }}>
                            <IconButton color="inherit">
                                <SettingsIcon />
                            </IconButton>
                        </Link>
                        <Button variant="text" size="large" onClick={logout} color="inherit">
                            Log Out
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key='home' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Home" placement='right'>
                                        <HomeIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='history' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/history' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="History" placement='right'>
                                        <ManageSearchIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='History' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='paraphrasing' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/paraphrasing' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Paraphrasing Tool" placement='right'>
                                        <EditIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Paraphrasing Tool' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='blogpost' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/blogpost' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Blog Post" placement='right'>
                                        <NotesIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Blog Post' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='adCopy' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/copyWriter' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Ad Copy" placement='right'>
                                        <CopyrightIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Ad Copy' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='productDescriptionWriter' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/productDescriptionWriter' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Product Description" placement='right'>
                                        <DescriptionIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Product Description' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='emailMarketingWriter' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/emailMarketingWriter' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Email Marketing" placement='right'>
                                        <MailIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Email Marketing' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='socialMediaCaptionsWriter' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/socialMediaCaption' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Social Media Caption" placement='right'>
                                        <TagIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Social Media Caption' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key='support' disablePadding sx={{ display: 'block' }}>
                        <Link to='/app/support' style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title="Support" placement='right'>
                                        <HelpIcon />
                                    </Tooltip>
                                </ListItemIcon>
                                <ListItemText primary='Support' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <DrawerHeader />
        </Box>
    );
}