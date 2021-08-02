import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    box:{
        margin:"auto",
        width: "50%"
    }
}));

function ContactInfo(){
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}
                  direction={"column"}
                  justify={"space-between"}
                  alignItems={"center"}>
            </Grid>
            <Grid item xs={5}
                  direction={"row"}
                  justify={"space-between"}
                  alignItems={"left"}>
                <Typography variant={"h4"}>
                    About Me
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant={"body1"}>
                    I have professional experience developing
                    a feature used by clients internationally from
                    my time at Re-Leased Software Ltd.<br/>
                    During this time I developed a modal and process
                    for bulk email functionality using .Net Core, C#,
                    JavaScript, Html and CSS. <br/>
                    I am an excellent team player, am
                    competent in many programming
                    languages, and strive constantly for
                    professional Improvement and
                    success.<br/>
                    I have proven soft-skills in leadership
                    and support through more than 5
                    years experience in retail and customer
                    facing roles.<br/>
                    My future goals involve working on projects that
                    affect the world at large, working remotely for an
                    overseas company and building my own company up to take
                    on many big projects.<br/>
                </Typography>

            </Grid>
            <Grid container item xs={3}
                  direction={"row"}
                  justify={"center"}
                  alignItems={"center"}>
                <Button>Download Resume</Button>
            </Grid>
        </Grid>
    )
}
export default ContactInfo;