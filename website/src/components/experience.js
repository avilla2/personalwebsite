import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Container, Row, Col, List
  } from 'reactstrap';

const Experience = () => {
    return (
        <div id="experienceTitle">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Experience</h2>
                        <p className="lead">Jobs/Internships</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Harry & David, Medford, OR (July 2020 - January 2021)</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Intern E-Commerce Web Developer</CardSubtitle>
                                <CardText>
                                    <List>
                                        <li>Updated webpages through the ContentStack CMS</li>
                                        <li>Built out specialized pages for form processing using javascript</li>
                                        <li>Used python for data processing and web scraping</li>
                                        <li>Edited Components in React for the Progressive Web App and merged with git</li>
                                    </List>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="6">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">University of Oregon, Remote (October 2020 - December 2020)</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Intro to Computer Science I Learning Assistant</CardSubtitle>
                                <CardText>
                                    <List>
                                        <li>Held office hours and planned lab sessions to teach a section of ~25 students</li>
                                        <li>Taught python concepts such as variables, functions, data types, and scoping</li>
                                    </List>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="projects">
                    <Col>
                        <p className="lead">Projects</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="cap" href="https://www.juanselcaporal.com/">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Juan's El Caporal Website </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Official Website for a Small Restaurant in Eagle Point, OR</CardSubtitle>
                                    <CardText>
                                        <List type="unstyled">
                                            <li>Website I designed and programmed using React and Django Frameworks</li>
                                            <li>Used Django for Object Relational Mapping to keep a menu PostgreSQL database, which can be updated without changing code </li>
                                            <li>Made as a react Web App to take advantage of ability to save web app on smartphones similir to a native app</li>
                                            <li>Interactive menu organized by sections</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>         
            </Container>
        </div>
    );
};

export default Experience;