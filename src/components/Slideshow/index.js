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
  <div style={{ height:'350px',backgroundColor:'white',boxShadow: '0 15px 50px -5px grey' }}>
    <Slider {...settings}>
    <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 1</h3></div>
      <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 2</h3></div>
      <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 3</h3></div>
      <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 4</h3></div>
      <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 5</h3></div>
      <div style={{ textAlign:'center',height:'300px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center' }}><h3>Pic 6</h3></div>
      </Slider>
  </div>
)

export default Slideshow