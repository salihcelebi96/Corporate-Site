import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/clients.jpg";
import image2 from "../assets/security.jpg";
import image3 from "../assets/teamwork.jpg";

const image4Url = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  const slides = [
    [image1, image2, image3], 
    [image2, image3, image4Url], 
    
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="card">
            <div className="image-container flex gap-5 justify-center">
              {slide.map((image, imageIndex) => (
                <img key={imageIndex} className="h-80" src={image} alt={`Image ${index * 3 + imageIndex + 1}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
