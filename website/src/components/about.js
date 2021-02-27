import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const About = () => {
    return (
        <div className="about">
            <h2 className="display-4">About Me</h2>
            <p className="lead">I am a Computer Science Student with an interest in Web and Mobile Application development.</p>
            <p className="lead"><b>My Knowledge of Programming Languages and Frameworks:</b></p>
            <ListGroup flush>
                <ListGroupItem>Python</ListGroupItem>
                <ListGroupItem>Django</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>C/C++</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default About;