import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar:{
        backgroundColor: "#000000"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.toolbar}>
                <Toolbar>
                    <DeveloperModeIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </DeveloperModeIcon>
                    <Typography variant="h6" className={classes.title}>
                        Lithial.Dev - Great Software
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;