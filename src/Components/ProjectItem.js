import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectItem(props) {
    const [tagList, setTagList] = useState(props.projectTags);

    return (
        <Card className="mw-50">
            <Card.Img variant="top" src={props.pathToImage}></Card.Img>
            <Card.Body>
                <Card.Title>{props.nameProject}</Card.Title>
                <Card.Text>
                    {props.descriptionProject}
                </Card.Text>
                <Card.Link href={props.linkToCode}>Github</Card.Link>
                <Card.Link href={props.linkToDemo}>Try</Card.Link>
            </Card.Body>
            <Card.Footer>
                <small>
                    {tagList.map((tag) => (
                       <Button 
                        variant="primary" 
                        className="mx-1" 
                        key={tag.id}
                        >{tag.name}
                        </Button> 
                    ))}
                </small>
            </Card.Footer>
        </Card>
    )
}

export default ProjectItem;