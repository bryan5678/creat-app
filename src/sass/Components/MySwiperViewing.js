import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const MySwiperViewing = (props) => {
    let cardItems2 = props.viewing.map((cardItem, index)=>{
        return (
    // <div >
    <SwiperSlide key={index}>
        <Card className="card--courses">
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
    </SwiperSlide>
    // </div>        
    
)})

    return (
        <div className="wrap" id="viewing">
                <div className="viewing-swiper-button-next"><MdNavigateNext className="iconStyle"/></div>
                <div className="viewing-swiper-button-prev"><MdNavigateBefore className="iconStyle"/></div>
                <Swiper
                id="swiper-viewing"
                loop={true}
                autoplay= {{
                    delay: 1000,
                    disableOnInteraction: true,
                }}
                spaceBetween={10}
                // slidesPerView= {1}
                navigation={{
                        nextEl: '.viewing-swiper-button-next',
                        prevEl: '.viewing-swiper-button-prev'
                }}
                // pagination={{ 
                //     clickable: true 
                // }}
                // scrollbar={{ draggable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    1200: {
                      slidesPerView: 6,
                    },
                    // when window width is >= 768px
                    1000: {
                      slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    600: {
                        slidesPerView: 3,  
                    },
                    576: {
                        slidesPerView: 2,  
                    },
                    0: {
                        slidesPerView: 1,  
                    },
                  }}
            >
                {cardItems2}
            </Swiper>
        </div>        
    )
}

export default MySwiperViewing



                          