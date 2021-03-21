import React, { Component } from 'react';
import { Col, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaTh } from 'react-icons/fa';
import LogoBlack from '../../img/logo-coral.svg';
import LogoWhite from '../../img/logo-coral-white.svg';

import FormSearch from '../Components/FormSearch';
import Button from '../Components/Button'

class Header extends Component {
    state={
        formSearch: "myNavBar__form-search",
        buttons: {
            btnType:["button button--white", "button button--red"],
            btnText: ["Log in", "Sign up"]
        }
        
    }
    render() {
        let Btns = this.state.buttons.btnType.map((btn, index)=>{
            return  <Button name={btn} key={index}>
                        {this.state.buttons.btnText[index]}
                    </Button>
        })

        return (
            <Navbar expand="md" className="myNavBar">
                <Col xs={3} md={8} className="d-md-none">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
                <Col xs={6} md={8} lg={9} xl={7} className="pl-0">
                   <div className="myNavBar__left">
                        <Navbar.Brand href="#home"><img className={`${this.props.isDark ? "logo-white"  : "logo-black"}`} src={`${this.props.isDark ? LogoWhite  :  LogoBlack}`} alt="logo"></img></Navbar.Brand>
                        <Nav.Link as="a" className="myNavBar__categories d-none d-md-flex" href="#home">
                            <FaTh/>
                            <span>Categories</span>
                        </Nav.Link>
                        <FormSearch 
                        name={this.state.formSearch}
                        placeHolder="Search for courses"
                        />
                   </div>
                </Col>
                <Col xs={3} md={4} lg={3} xl={5} className="myNavBar--reset">
                    <div className="myNavBar__right">
                        <Navbar.Collapse id="basic-navbar-nav" className="d-block flex-grow-0 flex-lg-grow-1 flex-basis-auto">
                            <Nav className="mr-auto" as="ul">
                                <Nav.Item as="li" className="business">
                                    <Nav.Link as="a" href="#home">Udemy for business
                                        <div className="myNavBar__overplay">
                                            <p>Get your team access to Udemy’s top 2,500 courses anytime, anywhere.</p>
                                            <a>Try Udemy For Business</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>   
                                <Nav.Item as="li" className="instructor">
                                    <Nav.Link as="a" href="#home">Become an instructor
                                        <div className="myNavBar__overplay">
                                            <p>Get your team access to Udemy’s top 2,500 courses anytime, anywhere.</p>
                                            <a>Try Udemy For Business</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>  
                                <Nav.Item as="li" className="myNavBar__cart ml-auto ml-xl-0">
                                    <Nav.Link as="a" href="#home">
                                        <FaShoppingCart/>
                                    </Nav.Link>     
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item myNavBar__buttons">
                                    <Nav.Link as="a" href="#home">
                                        {Btns}
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                     </div>
                </Col>
            </Navbar>
        )
    }
}

export default Header







