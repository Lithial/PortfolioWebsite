import React from "react";
import NavBar from "./components/NavBar";
import IntroPanel from "./components/IntroPanel";
import ProjectCards from "./components/ProjectCards";
import atlas from "./assets/images/tinyAtlas.png"
import {ReactComponent as postgres} from "./assets/icons/postgresql.svg"
import {ReactComponent as express} from "./assets/icons/express.svg"
import {ReactComponent as react} from "./assets/icons/react.svg"
import {ReactComponent as node} from "./assets/icons/nodedotjs.svg"
import {ReactComponent as docker} from "./assets/icons/docker.svg"
import {ReactComponent as githubActions} from "./assets/icons/githubactions.svg"
import {ReactComponent as digitalOcean} from "./assets/icons/digitalocean.svg"
function App() {
    //found at https://simpleicons.org/?q=express
    const projectList = [
        {
            index: 0,
            title: "Atlas",
            githubLink: "https://www.github.com/lithial/",
            projectLink: "https://atlas.lithial.me",
            appDescription:
            [
                "Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database.",
                "From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them."
            ],
            techDescription:
                {
                    text: "Atlas is a Fullstack Application developed using the PERN stack. This stack consists of PostgreSQL, Express, React and Node.js. The whole stack is put together using Docker Compose and run on a Digital Ocean Droplet. When changes are made to the repo, Github Actions uses SSH to run a script on the Droplet that rebuilds the docker images with the new changes.",
                    list: [
                        {
                            item: "PostgreSQL",
                            icon: postgres
                        },
                        {
                            item: "Express",
                            icon: express
                        },
                        {
                            item: "React",
                            icon: react
                        },
                        {
                            item: "Node",
                            icon: node
                        },
                        {
                            item: "Docker",
                            icon: docker
                        },
                        {
                            item: "Github Actions",
                            icon: githubActions
                        },
                        {
                            item: "Digital Ocean",
                            icon: digitalOcean
                        },
                    ]
                },
            image: atlas,
            imageTitle: "atlas"

        },
        {
      index: 1,
            title: "Atlas",
            appDescription:
            [
                "Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database.",
                "From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them."
            ],
            //"Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database. From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them.",
            techDescription:
                {
                    text: "Atlas is a Fullstack Application developed using the PERN stack. This stack consists of PostgreSQL, Express, React and Node.js. The whole stack is put together using Docker Compose and run on a Digital Ocean Droplet. When changes are made to the repo, Github Actions uses SSH to run a script on the Droplet that rebuilds the docker images with the new changes.",
                    list: [
                        {
                            item: "PostgreSQL",
                            icon: postgres
                        },
                        {
                            item: "Express",
                            icon: express
                        },
                        {
                            item: "React",
                            icon: react
                        },
                        {
                            item: "Node",
                            icon: node
                        },
                        {
                            item: "Docker",
                            icon: docker
                        },
                        {
                            item: "Github Actions",
                            icon: githubActions
                        },
                        {
                            item: "Digital Ocean",
                            icon: digitalOcean
                        },
                    ]
                },
            image: atlas,
            imageTitle: "atlas"
        }
    ]
    return (
    <>
        <IntroPanel />
{/*
        <NavBar />
*/}
        <ProjectCards projects={projectList}/>
    </>
  );
};

export default App;
