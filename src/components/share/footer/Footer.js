import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-light p-3">
            <Container>
                <Row>
                    <Col>
                        <h4>contact use</h4>
                        <h6>Phone:012812831</h6>

                        <h6>Email:GhuraGhuri.com</h6>
                        <h6>Office:Road# 222,Rokeya Sharoni,Badda,Dhaka</h6>
                    </Col>

                    <Col>
                        <h4>Most Famous</h4>
                        <h6>seint Martin</h6>
                        <h6>Bandarban</h6>
                        <h6>Khagrachori</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;