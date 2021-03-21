import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaBullseye, FaSpinner, FaSync } from 'react-icons/fa';

const Intro = () => {

    return (
    <section className="intro">
        <div className="intro__content">
            <Row>
                <Col xs={4}>
                    <div className="intro__item">
                        <div className="intro__icon">
                            <FaBullseye/>
                        </div>
                        <div className="intro__text">
                            <p>80,000 online courses</p>
                            <p>Explore a variety of fresh topics</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="intro__item">
                        <div className="intro__icon">
                            <FaSpinner/>
                        </div>
                        <div className="intro__text">
                            <p>Lifetime access</p>
                            <p>Learn on your schedule</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="intro__item">
                        <div className="intro__icon">
                            <FaSync/>
                        </div>
                        <div className="intro__text">
                            <p>Expert instruction</p>
                            <p>Find the right instructor for you</p>
                        </div>
                    </div>
                </Col>
            </Row>    
        </div>
    </section>
    )
}

export default Intro



