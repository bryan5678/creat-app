import React from 'react'
import { Col, Container, Row, Nav, Dropdown, ButtonGroup  } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import LogoBlack from '../../img/logo-coral.svg';
import LogoWhite from '../../img/logo-coral-white.svg';



const Footer = (props) => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <button
          className="btn button--dropup dropdown-toggle"  
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          <FaGlobe className="mr-2"/>
           {children}
           
        </button>
      ));
    return (
    <footer>
        <div className="footer__top">
            <Row>
                <Col xs={12} md={9}>
                    <Nav className="flex-column" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link className="bold" eventKey="link-0">Udemy for Business</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="bold" eventKey="link-1">Teach on Udemy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Udemy app</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-3">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-4">Careers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-5">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-6">Help and support</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-7">Affiliate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-8">Site map</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-9">Featured courses</Nav.Link>                        
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={12} md={3}>
                    <Dropdown className="btn-group dropup d-block text-md-right">
                        <Dropdown.Toggle 
                        as={CustomToggle} 
                        id="dropdown-custom-components"
                        drop='up'
                        className="btn-group d-block text-md-right"
                        >
                        English
                        </Dropdown.Toggle>
                        {/* <DropdownButton
                            as={ButtonGroup}
                            id="dropdown-button-drop-up"
                            drop='up'
                            title="<i class="fas fa-globe"></i> English"
                        >  */}
                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="1">English</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Deutsch</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Español</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Français</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Bahasa Indonesia</Dropdown.Item>
                            <Dropdown.Item eventKey="6">Italiano</Dropdown.Item>
                            <Dropdown.Item eventKey="7">日本語</Dropdown.Item>
                        </Dropdown.Menu>

                        {/* </DropdownButton> */}
                    </Dropdown>
                </Col>
            </Row>
        </div>   
        <hr></hr>
        <div className="footer__bottom">
            <Container fluid style={{ width: '90%', padding: '0'}}>
                <Row className="flex-column-reverse flex-md-row">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <img className={`${props.isDark ? "logo-white"  : "logo-black"}`} src={`${props.isDark ? LogoWhite  :  LogoBlack}`} alt="logo"></img>
                        <span> Copyright © 2020 Udemy, Inc.</span>
                    </Col>
                    <Col xs={12} md={6}>
                        <Nav className="justify-content-md-end">
                            <Nav.Item as="li">
                                <Nav.Link>Terms</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>Privacy Policy and Cookie Policy</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>                
    </footer>
    )
}

export default Footer
