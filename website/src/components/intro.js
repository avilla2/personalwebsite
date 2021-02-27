import React from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import portrait from "../SeniorPicture.jpg"

const Intro = () => {
    return (
        <div>
            <Jumbotron>
                <Container fluid>
                    <Row>
                        <Col xs="12" md="4">
                            <img className="portrait" src={portrait} alt="portrait" />
                        </Col>
                        <Col xs="12" md="8">
                            <div className="introText">
                                <h1 className="display-4">Alexandro Villa</h1>
                                <hr className="my-2" />
                                <p className="lead">Student at the University of Oregon </p>
                                <p className="lead"> B.S. Computer Science and Minor in Entreprenuership </p>
                                <p className="lead"> Class of 2022.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
             </Jumbotron>
        </div>
    );
};

export default Intro;