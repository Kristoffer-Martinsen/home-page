import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectItem({nameProject, linkToProject, descriptionProject, pathToImage}) {
    return (
        <Card className="mw-50">
            <Card.Img variant="top" src={pathToImage}></Card.Img>
            <Card.Body>
                <Card.Title>{nameProject}</Card.Title>
                <Card.Text>
                    {descriptionProject}
                </Card.Text>
                <Card.Link href={linkToProject}>Code</Card.Link>
                <Card.Link href={linkToProject}>Try</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectItem;