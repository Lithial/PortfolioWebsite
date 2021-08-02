import React from 'react';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia, Divider, Icon, Link,
    List,
    ListItem, ListItemIcon, ListItemText,
    makeStyles, SvgIcon,
    Typography
} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import {ReactComponent as github} from "../assets/icons/github.svg"
import {ReactComponent as atlas} from "../assets/icons/iconmonstr-globe-3.svg"
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1024,
        minWidth: 420,
        margin: "auto",
    },
    spacer: {
        height: "1rem"
    },
    flex: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        [theme.breakpoints.down('md')]:{
            flexDirection: "column",
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        flex: "1",
        [theme.breakpoints.down('md')]:{
            paddingRight: "10px",
            paddingLeft: "10px",
            flexShrink:"50%",
        }
    },
    content: {
        flex: "1",
        [theme.breakpoints.down('md')]:{
            paddingRight: "20px",
            paddingLeft: "20px",
        }
    },
    svgIcon:{
      width: "2.5em",
      height: "1.5em",
    },
    list: {
        paddingLeft: "25px",
        display: "flex",
        flexDirection:"column",
        margin: "auto",
        [theme.breakpoints.down('md')]:{
            paddingLeft: "0",
            paddingRight: "0",
            flexDirection:"row",
            flex: "0.2",
            flexGrow: "0",
            //flexFlow:" row wrap",
            alignContent: "space-between",
            justifyContent: "space-between",

        },
        [theme.breakpoints.down('sm')]:{
            paddingLeft: "0",
            flexDirection:"row",
        }
    },
    listIcon:{

    },
    listText:{

    }

}));

const ProjectCards = (props) => {
    const classes = useStyles();

    return (
        props.projects.map((project) => {
            return (

                <Card key={project.index} className={classes.root}>
                    {/**************************Header************************/}
                    <CardHeader
                        avatar={
                            <Avatar>
                                {project.title.substring(0, 1).toUpperCase()}
                            </Avatar>
                        }
                        title={project.title}
                        titleTypographyProps={{variant: 'h5'}}
                        action={
                            <div>
                                <Button href={project.githubLink} target="_blank">
                                    <SvgIcon className={classes.svgIcon} component={github}/>
                                </Button>
                                <Button href={project.projectLink} target="_blank">
                                    <SvgIcon className={classes.svgIcon} component={atlas} title={project.title}/>
                                </Button>
                            </div>
                        }
                    >
                    </CardHeader>
                    {/**************************Media************************/}
                    <div className={classes.flex}>
                        {/**************************Image Side************************/}
                        <CardMedia
                            className={classes.media}
                            image={project.image}
                            title={project.imageTitle}
                        />
                        {/**************************Content Side************************/}
                        <CardContent className={classes.content}>
                            <div className={classes.content}>
                            {/**************************Title************************/}

                            <Typography variant="h5" color="textSecondary" component="p">
                                What is {project.title}?
                            </Typography>
                            {/**************************First Paragraph************************/}
                            {
                                project.appDescription.map((paragraph, index) => {
                                    return (
                                        <Typography key={index} variant="body2" color="textSecondary" component="p">
                                            {paragraph}
                                        </Typography>
                                    )
                                })
                            }
                            </div>
                            {/**************************Divider************************/}
                            <div className={classes.spacer}/>
                            <Divider/>
                            <div className={classes.spacer}/>

                            {/**************************Second Paragraph************************/}

                            <div className={classes.flex}>
                                <div className={classes.content}>
                                    {/**************************Title************************/}

                                    <Typography variant="h5" color="textSecondary" component="p">
                                        What technology is used?
                                    </Typography>
                                    {/**************************Paragraph************************/}

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.techDescription.text}
                                    </Typography>
                                </div>

                                <div className={classes.content}>
                                    {/**************************List Column************************/}
                                    <List className={classes.list} dense={true}>
                                        {
                                            project.techDescription.list.map((listItem, index) => {
                                                return (
                                                    <ListItem key={index}>
                                                        <ListItemIcon className={classes.listIcon}>
                                                            <SvgIcon component={listItem.icon}/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            className={classes.listText}
                                                            primary={listItem.item}
                                                        />
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            );
        })
    )
};

export default ProjectCards;