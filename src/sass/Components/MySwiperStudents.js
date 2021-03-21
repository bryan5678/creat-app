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
import { student } from '../Layout/data';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const MySwiperStudents = () => {
    let slides = student.map((slide, index)=>{
        return (
    <SwiperSlide key={index}>
        <Card className="card--feedback">
            <Card.Body>
                <div className="card__top">
                    <div className="card__avatar">
                        <img src={slide.avatar} alt="s1"></img>
                    </div>
                    <div className="card__rating d-block">
                        <p className="card__name">{slide.fullName}</p>
                        <span className="card__stars">
                                 {[...Array(slide.stars)].map((star) =>{
                                      return  <FaStar className="mr-1"/>;
                                  })}
                                  { [...Array(slide.halfStars)].map((star) =>{
                                      return  <FaStarHalfAlt className="mr-1"/>;
                                  })}
                                  {[...Array(slide.unStars)].map((star) =>{
                                      return  <FaRegStar className="mr-1" 
                                              />
                                  })}
                        </span>    
                    </div>
                </div>    
                <Card.Text>{slide.feedback}</Card.Text>
            </Card.Body>
        </Card>
    </SwiperSlide>
)})

    return (
        <div className="wrap" id="students">
                <div className="students-swiper-button-next"><MdNavigateNext className="iconStyle"/></div>
                <div className="students-swiper-button-prev"><MdNavigateBefore className="iconStyle"/></div>
                <Swiper
                id="swiper-students"
                loop={true}
                autoplay= {{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                // slidesPerView= {1}
                navigation={{
                        nextEl: '.students-swiper-button-next',
                        prevEl: '.students-swiper-button-prev'
                }}
                pagination={{ 
                    clickable: true 
                }}
                // scrollbar={{ draggable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20

                    },
                    // when window width is >= 768px
                    900: {
                      slidesPerView: 2,
                      spaceBetween: 10

                    },
                    0: {
                        slidesPerView: 1,  
                      },
                  }}
            >
              
                {slides}
            </Swiper>
        </div>        
    )
}

export default MySwiperStudents



                          