import React, { useState } from 'react';
import { Col, Container, Row, Tab, Tabs  } from 'react-bootstrap';
import MySwiperCourses from '../Components/MySwiperCourses';
import { development, design } from './data';




const Courses = () => {
    const [key, setKey] = useState('development');
        return (
        <section class="courses" >
            <Container fluid style={{ width: '90%' }}>
                <Row className="flex-column flex-md-row">
                    <Col xs={12} md={3} className="courses__left">
                        <div>
                            <h2>The world’s largest selection of courses</h2>
                            <p>Choose from over 80,000 online video courses with new additions published every month</p>
                        </div>
                    </Col>
                    <Col xs={12} md={9} className="pr-0 plsm-0 mt-3 mt-md-0">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="development" title="Development">
                                <MySwiperCourses 
                                eventKey={ development }
                                />
                            </Tab>
                            <Tab eventKey="design" title="Design">
                                <MySwiperCourses 
                                eventKey={ design }
                                />
                            </Tab>
                            <Tab eventKey="business" title="Business">
                                <p>Tooi 3</p>
                            </Tab>
                            <Tab eventKey="IT" title="IT">
                                <p>Tooi 4</p>
                            </Tab>
                            <Tab eventKey="personal" title="Personal">
                                <p>Tooi 5</p>
                            </Tab>
                            <Tab eventKey="marketing" title="Marketing">
                                <p>Tooi 6</p>
                            </Tab>
                            <Tab eventKey="photography" title="Photography">
                                <p>Tooi 7</p>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }

export default Courses

