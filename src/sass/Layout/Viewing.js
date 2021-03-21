import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MySwiperViewing from '../Components/MySwiperViewing';
import { viewing } from './data';


const Viewing = () => {
    return (
        <section className="viewing">
            <Container fluid style={{ width: '90%' }}>
                <Row>
                    <h2>Students are viewing</h2>
                </Row> 
                <Row>
                    <MySwiperViewing viewing={viewing}/>
                </Row>    
            </Container>    
        </section>
    )
}

export default Viewing
