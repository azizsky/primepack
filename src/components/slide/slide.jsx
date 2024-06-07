import React from "react";
import "./slide.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SlideImg = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 3,
    autoplay:true,
    autoplayspeed:200,
    slidesToScroll: 1,

  };
   
   return (
      <Slider {...settings} className="slide">
         <div>
           <h3>Slide 1</h3>
         </div>
         <div>
           <h3>Slide 2</h3>
         </div>
         <div>
           <h3>Slide 3</h3>
         </div>
         <div>
           <h3>Slide 3</h3>
         </div>
         <div>
           <h3>Slide 3</h3>
         </div>
         <div>
           <h3>Slide 3</h3>
         </div>
      </Slider>
     
     
   );
};


export default SlideImg;