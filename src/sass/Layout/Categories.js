import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCode, FaChartBar, FaLaptop, FaPen, FaBullseye, FaBook, FaCameraRetro } from 'react-icons/fa';
import { category } from './data';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

class Categories extends Component {
    render() {
        let items= category.map((item, index)=>{
            return (
                <Col xs={12} md={6} lg={4} xl={3} key={index} >
                    <a className="categories__items">
                        <i className={`fa ${item.icon}`}></i>
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
