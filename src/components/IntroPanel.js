import React from 'react';
import ParticleHeader from './ParticleHeader';
import {Divider, makeStyles} from '@material-ui/core';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root:{
        position:"static",
    },
    centeredText:{
        color:"#ffffff",
        position:"absolute",
        textAlign:"center",
        verticalAlign:"middle",

        [theme.breakpoints.down('xs')]:{
            top:"12%",
            margin:"auto",
            paddingRight:"15px",
            paddingLeft:"15px",
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up('sm')]:{
            top:"15%",
            margin:"auto",
            paddingBottom:"30px",
            paddingLeft:"10%",
            paddingRight:"10%",
            padding:"20px",
            fontSize: "1.5rem",

        },
        [theme.breakpoints.up('md')]:{
            margin:"auto auto",
            paddingBottom:"30px",
            paddingLeft:"15%",
            paddingRight:"15%",
            fontSize: "1.75rem",

        },
        [theme.breakpoints.up('xl')]:{
            margin:"auto auto",
            top:"15%",
            paddingLeft:"20%",
            paddingBottom:"1.5rem",
            paddingRight:"20%",
            padding:"1rem",
            fontSize: "2.75rem",
        },
        [theme.breakpoints.between('lg', "xl")]:{
            margin:"auto auto",
            fontSize: "1.75rem",

        },

    },
}));

function IntroPanel(){
    const classes = useStyles();

    return(
        <div>
            <Box className={classes.root}>
                <ParticleHeader />
                <div className={classes.centeredText}>
                    <Box component="div" whiteSpace="normal">
                        <h1 >James Hessell-Bowman</h1>
                    </Box>
                    <Box component="div" whiteSpace="normal">
                        <h2 >Software Developer</h2>
                    </Box>
                    <Box component="div" whiteSpace="normal">
                        I am a Software Engineer and Web Developer that uses a variety of different programming languages to make fun and interesting projects.
                    </Box>
                    <Divider/>
                    <Box component="div" whiteSpace="normal">
                        I am currently looking for work as a remote employee or contractor. I also have access to a team for larger business projects with ioSoftworks.
                    </Box>
                    <p> </p>
                </div>
            </Box>
        </div>
    )
}
export default IntroPanel;