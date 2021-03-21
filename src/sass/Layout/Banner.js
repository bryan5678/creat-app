import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GgBtn from '../../img/google_btn.png'
import ApBtn from '../../img/apple_btn.png'


const Banner = () => {
    return (
    <section className="banner">
        <Container>
            <Row>
                <Col>
                    <h2>Learn anything, anywhere</h2>
                    <p>Take courses on any of your devices</p>
                    <p>Go at your own pace with lifetime access</p>
                    <p>Try risk-free with our 30-day money-back guarantee</p>
                    <button className="button--red">Sign up for free</button>
                    <div className="banner-app d-flex justify-content-center">
                        <img src={GgBtn} alt="google_btn"></img>
                        <img src={ApBtn} alt="apple_btn"></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Banner
