import React from 'react';
import { partner } from '../Layout/data';


const Partners = () => {
    let items = partner.map((item, index)=>{
        return(
        <div className="partners__item" key={index}>
            <img src={item.logo} alt="booking"></img>
        </div>
        )
    })
    return (
    <section className="partners">
        <div className="partners__content text-center">
            <p className="partners__title">Trusted by companies of all sizes</p>
            <div className="row justify-content-around">   
                {items}
            </div>
        </div>
    </section>
    )
}

export default Partners
