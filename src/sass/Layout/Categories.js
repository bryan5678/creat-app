import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { category } from './data';


class Categories extends Component {
    render() {
        let items= category.map((item, index)=>{
            return (
                <Col xs={12} md={6} lg={4} xl={3} key={index} >
                    <a href="/#" className="categories__items">
                       <span className="categories__icons">{item.icon} </span>
                        <span>  {item.text}</span>
                    </a>
                    
                </Col>
            ) 
        })

        return (
            <section className="categories">
                <Container fluid  style={{ width: '90%', padding: "0" }}>
                    <Row>
                        <Col>
                            <h2>Top Categories</h2>
                        </Col>
                    </Row>
                    <Row>
                        {items}
                    </Row>
                </Container>
            </section>
    
        )
    }
}

export default Categories
