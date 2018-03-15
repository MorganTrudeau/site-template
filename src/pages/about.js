import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

const Slideshow = () => (
<div>
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

const AboutPage = () => (
  <div>
    <div className="section parallax bg2"
      style={{
        color:'white',
      textShadow: '0 0 5px #000'
      }}
    >
      <h1 style={{ lineHeight:'50vh' }}>ABOUT</h1>
    </div>
    <div className="grid-column" style={{ gridTemplateColumns:'1fr 1fr 1fr',height:'300px',backgroundColor:'white' }}>
      <div className="grid-item">
        <h2>First</h2>
        <p>Nam ex veniam commune. Graece liberavisse mei eu, ad mei magna alienum, vivendum omittantur ea nec. An hendrerit ullamcorper interpretaris sed. Ex suas animal vis, numquam assueverit mel cu, ne vim quis cetero nostrum.</p>
      </div>
      <div className="grid-item">
        <div>
          <h2>Second</h2>
          <p>Nam ex veniam commune. Graece liberavisse mei eu, ad mei magna alienum, vivendum omittantur ea nec. An hendrerit ullamcorper interpretaris sed. Ex suas animal vis, numquam assueverit mel cu, ne vim quis cetero nostrum.</p>
        </div>
      </div>
      <div className="grid-item">
        <h2>Third</h2>
        <p>Nam ex veniam commune. Graece liberavisse mei eu, ad mei magna alienum, vivendum omittantur ea nec. An hendrerit ullamcorper interpretaris sed. Ex suas animal vis, numquam assueverit mel cu, ne vim quis cetero nostrum.</p>
      </div>
    </div>

    <div className="grid-column" style={{ gridTemplateColumns:'1fr 1fr' }}>
      <div className="grid-item" style={{ backgroundColor:'black',color:'white' }}>
        <h1>Image</h1>
      </div>
      <div className="grid-item" style={{ backgroundColor:'lightGrey' }}>
        <h2>Something Nice</h2>
        <p>Lorem ipsum dolor sit amet, cu qui modus volumus accumsan, wisi iusto viris cu per. Pri eu elitr omnesque, latine molestiae vituperata ea nam. Ad laudem tincidunt sea, no sea soluta iracundia hendrerit. Agam oratio deseruisse ne vel.

Omnium placerat voluptaria est ei. Munere doctus vivendum ut pro, eu pro iisque fierent. Et augue erroribus nec. At audire lobortis pericula mei, possim nonumes comprehensam te eam, corrumpit inciderint ut nam. Postea epicuri consequat ne vim, et mediocrem dissentiet sea.

Id animal labores mea, eum tollit torquatos eu. Ne mea essent imperdiet, sit ponderum gloriatur quaerendum no, scripta suscipit lobortis nam ea. Vitae oblique mea ad, ut inani qualisque sit. Illud propriae mel ad. Ut vis alia fabellas, altera corpora adipisci sea ei.</p>
      </div>
    </div>

    <Slideshow />
  </div>
)

export default AboutPage
