import React from 'react';
import ParticleHeader from './ParticleHeader';
import {makeStyles} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        position:"relative"
    },
    centeredText:{
        color:"#ffffff",
        position:"absolute",
        textAlign:"center",
        verticalAlign:"middle",
        width:"100%",

        [theme.breakpoints.down('xs')]:{
            top:"0.1%",
            margin:"auto",
            paddingRight:"15px",
            paddingLeft:"15px",
        },
        [theme.breakpoints.up('sm')]:{
            top:"15%",
            margin:"auto",
            paddingBottom:"30px",
            padding:"20px",
        },
        [theme.breakpoints.up('md')]:{
            top:"18%",
            margin:"auto",
            paddingBottom:"30px",
            paddingLeft:"15%",
            paddingRight:"15%",
            padding:"20px",
        },

        [theme.breakpoints.up('lg')]:{
            top:"30%",
            margin:"auto, auto, 20% , 20%",
            paddingBottom:"30px",
            paddingLeft:"20%",
            paddingRight:"20%",
            padding:"15px",
        },
        [theme.breakpoints.up('xl')]:{
            top:"20%",
            margin:"auto, auto, 20% , 20%",
            paddingBottom:"30px",
            paddingLeft:"20%",
            paddingRight:"20%",
            padding:"15px",
        },

    },
}));

function IntroPanel(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Box>
                <ParticleHeader className={classes.particleSquare}/>
                <div className={classes.centeredText}>
                    <Box component="div" whiteSpace="normal">
                        <h1 >James Hessell-Bowman</h1>
                    </Box>
                    <Box component="div" whiteSpace="normal">
                        <h2 >Software Developer</h2>
                    </Box>
                    <Box component="div" whiteSpace="normal">
                        I am a Software Engineer and Web Developer that uses a variety of different programming languages to make fun and interesting projects.
                        I am currently looking for work as a remote employee or contractor and I also take on projects with my company io Softworks.
                    </Box>
                    <p> </p>
                </div>
            </Box>
        </div>
    )
}
export default IntroPanel;