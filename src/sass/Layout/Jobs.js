import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../Components/Button';

const Jobs = () => {
    return (
    <section className="jobs">
        <Container fluid className="text-center">
            <Row>
                <Col xs={12} md={6} className="border-right">
                    <div className="jobs__items">
                        <h3>Become an Instructor</h3>
                        <p>Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        <Button name='button--red'>
                            Start teaching today
                        </Button>  
                    </div>   
                </Col>
                <Col xs={12} md={6}>
                    <div className="jobs__items">
                        <h3>Udemy for Business</h3>
                        <p>Get unlimited access to 4,000+ of Udemy’s top courses for your team.</p>
                        <Button name='button--red'>
                            Get Udemy for business
                        </Button>                        
                    </div>   
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Jobs
