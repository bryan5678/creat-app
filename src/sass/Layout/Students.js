import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MySwiperStudents from '../Components/MySwiperStudents';


const Students = () => {
    return (
        <section className="students">
            <Container fluid style={{ width: '90%' }}>
                <Row>
                    <h2>What our students have to say</h2>
                </Row>
                <Row className="d-block">
                    <MySwiperStudents/>
                </Row>
            </Container>
        </section>
    )
}

export default Students
