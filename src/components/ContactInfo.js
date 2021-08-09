import React from 'react';
import {Avatar, Card, SvgIcon, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import me from "../assets/images/me.jpg"
import {ReactComponent as github} from "../assets/icons/github.svg";
import {ReactComponent as linkedIn} from "../assets/icons/linkedin.svg";
import {ReactComponent as twitter} from "../assets/icons/twitter.svg";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: 1024,
        minWidth: 280,
        margin: "0 auto",
        padding: "3%"
    },
    avatar: {
        width: "10em",
        height: "10em",
        margin: "0 auto",
        borderRadius: "15% 15% 2% 2%"
    },
    text:{
        margin: "10px auto",
        width: "50%",
        textAlign:"center",

    },
    socials: {
        margin: "auto",

    },
    flex:{
        display:"flex",
        width:"50%",
        margin:"auto"
    },
    center:{
        margin: "auto"
    },
    svgIcon:{

    }



}));

function ContactInfo(){
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <div className={classes.center}>
               <Avatar className={classes.avatar} src={me}/>
               <Typography className={classes.text} variant={"body2"}>
               Hello there, I am a Software Engineer and Nerd from New Zealand.
               With a BCS from the Eastern Institute of Technology, I have developed the skills required to make
               applications, websites, games, bots and more.
               </Typography>
               <Typography className={classes.text} variant={"body2"}>
                   I have worked with big New Zealand companies and small Australian Indie companies,
                   as well as starting my own company to work on websites and applications locally in my community.
               </Typography>
               <div className={classes.flex}>
                   <Button className={classes.socials} href="https://github.com/Lithial" target="_blank">
                       <SvgIcon className={classes.svgIcon} component={github}/>
                   </Button>
                   <Button className={classes.socials} href="https://www.linkedin.com/in/james-hessell-bowman/" target="_blank">
                       <SvgIcon className={classes.svgIcon} component={linkedIn}/>
                   </Button>
                   <Button className={classes.socials} href="https://www.twitter.com/lithial13" target="_blank">
                       <SvgIcon className={classes.svgIcon} component={twitter}/>
                   </Button>
               </div>
           </div>
       </Card>
    )
}
export default ContactInfo;