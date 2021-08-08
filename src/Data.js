//found at https://simpleicons.org/?q=express
import {ReactComponent as postgres} from "./assets/icons/postgresql.svg";
import {ReactComponent as express} from "./assets/icons/express.svg";
import {ReactComponent as react} from "./assets/icons/react.svg";
import {ReactComponent as node} from "./assets/icons/nodedotjs.svg";
import {ReactComponent as docker} from "./assets/icons/docker.svg";
import {ReactComponent as githubActions} from "./assets/icons/githubactions.svg";
import {ReactComponent as golang} from "./assets/icons/go.svg";
import {ReactComponent as aws} from "./assets/icons/amazonaws.svg";
import {ReactComponent as digitalOcean} from "./assets/icons/digitalocean.svg";
// import {ReactComponent as nginx} from "./assets/icons/nginx.svg";
import {ReactComponent as link} from "./assets/icons/link.svg";
import {ReactComponent as nix} from "./assets/icons/null.svg";
import {ReactComponent as globe} from "./assets/icons/iconmonstr-globe-3.svg";
import atlas from "./assets/images/tinyAtlas.png";
import imageNotFound from "./assets/images/imageNotFound.png";

const Data = [
    {
        index: 0,
        title: "Atlas",
        githubLink: "https://github.com/pixel-rocket/atlas",
        projectLink: "https://atlas.lithial.me",
        icon:globe,
        appDescription:
            [
                "Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database.",
                "From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them."
            ],
        techDescription:
            {
                text: [
                    "Atlas is a Fullstack Application developed using the PERN stack. This stack consists of PostgreSQL, Express, React and Node.js. The whole stack is put together using Docker Compose and run on a Digital Ocean Droplet. When changes are made to the repo, Github Actions uses SSH to run a script on the Droplet that rebuilds the docker images with the new changes.",
                    "The application is routed through a NGINX reverse proxy. The login functionality is created using the Auth0 api. It is implemented so that you can login with a discord account with ease."
                ],
                list: [
                    {
                        item: "Postgre SQL",
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
                    }
                    // ,
                    // {
                    //     item: "Nginx",
                    //     icon: nginx
                    // }
                ]
            },
        image: atlas,
        imageTitle: "atlas"

    },
    {
        index: 1,
        title: "LinkShortener",
        githubLink: "https://www.github.com/lithial/",
        projectLink: "",
        icon:link,
        appDescription:
            [
                "This link shortener is a project based on copying a service like bit.ly. The goal is to take links and shorten them while also allowing the tracking of clicks, location and referrees. This application is currently a work in progress but feel free to ask me about it.",
                "The project works by taking links from an input form at the frontend and sending them to the backend. There a code is generated and the pair is sent to the database to be retrieved at a later date. If the backend is pinged with a URL end using a code from the database, the browser is redirected to the related link."
            ],
        //"Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database. From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them.",
        techDescription:
            {
                text: [
                    "The yet unnamed link shortener project is a PERN based project. This stack consists of PostgreSQL, Express, React and Node.js. The whole stack is put together using Docker Compose and will be run on a Digital Ocean Droplet. When changes are made to the repo, Github Actions will use SSH to run a script on the Droplet that rebuilds the docker images with the new changes.",
                    "I think I will also add the ability to login using Auth0 to this application as well. This application will likely have the option to log in with Google and one other common login option to be decided at a later date."
                ],
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
        image: imageNotFound,
        imageTitle: "projectNotFinished"
    },
    {
        index: 2,
        title: "Online Ordering System",
        githubLink: "https://www.github.com/lithial/",
        projectLink: "",
        icon:nix,
        appDescription:
            [
                "This project is an online ordering system based on a shop in my local area. It is still in the design stage but this is how it will work in the future.",
                "An order will be placed on the website and sent to the database. Using websocket technology the order will be sent to an application at the store in real time. This will allow for easy ordering of food in advance.",
                "I am also contemplating adding in support for an api such as stripe to support paying online via the application but I need to research this more before I commit to it."
            ],
        //"Atlas is a location based social platform for keeping track of your online friends or commitments. It takes the location from your browser, runs it thought the 'https://geocode.xyz/' reverse geocoding API and determines your location. It then parses the useful data out of the response and sends it to the Postgres Database. From there you can add friends using a UUID friend code and have their approximate locations and times displayed on a map. This is useful in situations where you are collaborating with people from other countries, but you wish to ensure that it is a reasonable hour where they are before you contact them.",
        techDescription:
            {
                text: [
                    "This application will be built on React, Golang, Postgres and Docker I think. Docker compose and Github actions as usual. I think I might investigate putting it on AWS this time as a way to investigate new skills.",
                    "This app is in the design phase and subject to change."
                ],
                list: [
                    {
                        item: "PostgreSQL",
                        icon: postgres
                    },
                    {
                        item: "Golang",
                        icon: golang
                    },
                    {
                        item: "React",
                        icon: react
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
                        item: "AWS",
                        icon: aws
                    },
                ]
            },
        image: imageNotFound,
        imageTitle: "projectNotFinished"
    }
]

export default Data;