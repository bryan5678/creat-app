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

const MySwiperCourses = (props) => {
   
    let cardItems1 = props.eventKey.map((cardItem, index)=>{
        return (
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
)})

    return (
        // <div className="swiper__wrapper">
        <div className="wrap">
                <div className="courses-swiper-button-next"><MdNavigateNext className="iconStyle"/></div>
                <div className="courses-swiper-button-prev"><MdNavigateBefore className="iconStyle"/></div>
                <Swiper
                id="swiper-courses"
                loop={true}
                autoplay= {{
                    delay: 1000,
                    disableOnInteraction: false,
                    waitForTransition: true
                }}
                spaceBetween={30}
                // slidesPerView= {1}
                navigation={{
                        nextEl: '.courses-swiper-button-next',
                        prevEl: '.courses-swiper-button-prev'
                }}
                // pagination={{ 
                //     clickable: true 
                // }}
                // scrollbar={{ draggable: true }}
                observer={true}
                resizeObserver={true}
                
                breakpoints={{
                    // when window width is >= 640px
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 20

                    },
                    // when window width is >= 768px
                    600: {
                      slidesPerView: 3,
                      spaceBetween: 10

                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 10
  
                    },
                    0: {
                        slidesPerView: 1,
                    },
                  }}
            >
              
                {cardItems1}


            </Swiper>
        </div>
           
        // </div>
        
    )
}



export default MySwiperCourses



// var mySwiper = document.querySelector('#swiper-courses .swiper-wrapper');

// function startFunction(){
//     mySwiper.autoplay.start();
// };                         