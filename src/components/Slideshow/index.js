import React from 'react'
import Slider from 'react-slick'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

const Slideshow = () => (
    <Slider {...settings}>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>1</h3></div>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>2</h3></div>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>3</h3></div>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>4</h3></div>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>5</h3></div>
        <div style={{ textAlign:'center',height:'300px',backgroundColor:'grey' }}><h3>6</h3></div>
      </Slider>
)

export default Slideshow