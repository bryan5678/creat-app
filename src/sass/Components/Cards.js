import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Card, Col } from 'react-bootstrap';

const Cards = (props) => {
   let cardItems = props.data.map((cardItem, index)=>{
        return (
                <Card className="card--courses" key={index}>
                    <Card.Img variant="top" src={cardItem.img} alt={cardItem.alt}/>
                    <Card.Body>
                        <Card.Title>{cardItem.title}</Card.Title>
                        <Card.Text>{cardItem.text}</Card.Text>
                        <div className="card__rating">
                                <span className="card__stars">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStarHalf/>
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
                  
           
            )
    })



   
}

export default Cards
