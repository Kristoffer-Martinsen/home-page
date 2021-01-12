import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';


const initalProjectList = [
    {
        id: "1",
        name: "Collecting Parts",
        githubLink: "https://github.com/Kristoffer-Martinsen/Collecting-Parts",
        demoLink: "https://legendaryhippo.itch.io/collecting-parts",
        description: "My entry in the Ludum Dare 45 Game Jam. The Theme was starting with nothing. My entry is a platformer where you have to collect all your abilities from jumping to shooting.",
        path: '../Images/CollectingParts.png',
        tags: [{id: "1", name: "Godot"}, {id: "2", name:"GDScript"}]
    },
    {
        id: "2",
        name: "Home Page",
        githubLink: "https://github.com/Kristoffer-Martinsen/home-page",
        demoLink: "https://kristoffer-martinsen.github.io/home-page/",
        description: "My portfolio website made with ReactJS (create-react-app) where I show the projects I've made during my software developer journey.",
        path: '../Images/home-page.png',
        tags: [{id: "1", name:"JavaScript"}, {id: "2", name:"ReactJS"}, {id: "3", name:"Bootstrap"}]
    },
]


function ListOfProjects() {
    const [projectList, setProjectList] = useState(initalProjectList);

    return (
        <div className="ListOfProjects w-100">
            <h1 className="ProjectHeader">Projects:</h1>
            <Container fluid >
                <CardColumns as="ul">
                    {initalProjectList.map((item) => (
                        <ProjectItem 
                            key={item.id} 
                            nameProject={item.name}
                            linkToCode={item.githubLink}
                            linkToDemo={item.demoLink}
                            descriptionProject={item.description}
                            pathToImage={item.path}
                            projectTags={item.tags}
                        ></ProjectItem>
                    )) }
                </CardColumns>
            </Container>
        </div>
    )
}

export default ListOfProjects;