import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Card, Col } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


class MySlider2 extends Component {
    
  render() {
    let cardItems2 = this.props.viewing.map((cardItem, index)=>{
      return (

        <Col className="px-2">
          <Card className="card--courses" key={index}>
                  <Card.Img variant="top" src={cardItem.img} alt={cardItem.alt}/>
                  <Card.Body>
                      <Card.Title>{cardItem.title}</Card.Title>
                      <Card.Text>{cardItem.text}</Card.Text>
                      <div className="card__rating">
                              <span className="card__stars">
                                  {[...Array(cardItem.stars)].map((star) =>{
                                      return  <FaStar className="mr-1"/>;
                                  })}
                                  { [...Array(cardItem.halfStars)].map((star) =>{
                                      return  <FaStarHalfAlt className="mr-1"/>;
                                  })}
                                  {[...Array(cardItem.unStars)].map((star) =>{
                                      return  <FaRegStar className="mr-1" 
                                              />
                                  })}
                              </span>
                              <span className="card__score">
                                  {cardItem.score}
                              </span>
                              <span className="card__total">
                                  {cardItem.total}
                              </span>
                          </div>
                          <div className="card__price">
                              <span>{cardItem.oldPrice}</span>
                              <span>   {cardItem.newPrice}</span>
                          </div>
                  </Card.Body>
              </Card>   
          </Col>
            
              
       

      )
  })   

    
  const setting2s = {
      dots: false,
      infinite: true,
      speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          // breakpoint <1400
          breakpoint: 1400, 
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          // breakpoint <1400
          breakpoint: 1100, 
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 672,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

  
    return (
        <Slider {...setting2s}>
               {cardItems2}               
        </Slider>
    );
  }
}



// ........................................





export default MySlider2
