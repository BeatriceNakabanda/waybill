import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import {
    Toolbar, AppBar, Drawer, Typography, Box, CssBaseline,
    IconButton, Grid, InputBase
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import profile_pic from '../assets/baby.jpg'
import Dashboard from '../modules/dashboard/Dashboard';
import XSideBarMenu from './XSideBarMenu';

const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius: '5px',
    marginTop: '5px',
    backgroundColor: '#f4f5fb',
    '&:hover': {
        //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginRight: '16px',
    // marginRight: theme.spacing(5),
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //     width: 'auto',
    // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    padding: '8px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999999'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        //   padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '32px',
        //   vertical padding + font size from searchIcon
        //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //   transition: theme.transitions.create('width'),
        width: '100%',
        //   [theme.breakpoints.up('md')]: {
        //     width: '20ch',
        //   },
    },
}));

const useStyles = makeStyles({
    root: {
        display: 'flex',
        '& .css-g3v5db-MuiPaper-root-MuiDrawer-paper': {
            borderRight: 'none',
        },
        '& .css-tapivm-MuiPaper-root-MuiDrawer-paper': {
            borderRight: 'none',
        },
        '& .css-17lngqm-MuiListItem-root': {
            paddingTop: '0px'
        },
        '& .css-1t29gy6-MuiToolbar-root': {
            height: '10%'
        },
        '& .css-12hmn4b-MuiButtonBase-root-MuiListItem-root': {
            marginTop: '10px',
            '&:hover': {
                color: '#0044FF',
                backgroundColor: '#f4f5fb',
                borderRight: '5px solid #0044FF',
                '& .css-i4bv87-MuiSvgIcon-root': {
                    color: '#0044FF',
                },
                '& .css-1krnuft-MuiTypography-root': {
                    color: '#0044FF'
                },
            },
        },
        '.css-yz9k0d-MuiInputBase-input': {
            alignItems: 'center'
        },
        '& .css-cveggr-MuiListItemIcon-root': {
            minWidth: '10%',
            marginRight: '16px',
        },
        '& .css-h4y409-MuiList-root': {
            paddingTop: '0px',
            paddingBottom: '0px'
        },
    },
    profile: {
        float: 'right',
        display: 'flex',
        alignItems: 'center',
    },
    profileImage: {
        paddingLeft: '0px',
        borderRadius: '50%'
    },
    link: {
        paddingRight: '20px',
        color: '#3a5f79',
        fontSize: 'larger'
    },
    icon: {
        marginRight: '20px'
    },
    name: {
        fontStyle: 'bold',
    },
    role: {
        fontSize: '12px',
        color: '#878792'
    },
    drawerDiv: {
        borderRight: '0px'
    },
    logo: {

    }
});

const drawerWidth = 240;
const drawer = (
    <XSideBarMenu />
);

function Layout(props: any) {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#fff",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Grid container>
                        <Grid item>
                            {/* <InputBase placeholder="Search" /> */}
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item className={classes.profile}>
                            <NotificationsIcon className={classes.icon} />
                            <img src={profile_pic} alt="logo" width="40dp" height="40dp" className={classes.profileImage} />
                            <div style={{ paddingLeft: "20px", display: "block" }}>
                                <Typography className={classes.name}>Beatrice Nakabanda</Typography>
                                <Typography variant="body2">Admin</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: '' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    elevation={0}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, pt: 0, pl: 3, pr: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Dashboard />
            </Box>
        </Box>
    )
}

export default Layout;