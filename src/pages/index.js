import React from 'react'
import Link from 'gatsby-link'
import Slideshow from '../components/Slideshow'

const IndexPage = () => (
  <div>
  <Slideshow />
  <div className="section parallax bg1"
    style={{ 
      color:'white',
      textShadow: '0 0 5px #000'
    }}
  >
    <h1 style={{ display:'flex',flexDirection:'column',justifyContent:'center',height:'30vw' }}>Something Impressive</h1>
  </div>
  <div className="section"
    style={{ 
      padding:'50px',
      backgroundColor:'white',
      textAlign:'center'
    }}
  >
    <h1>Intro</h1>
    <p>Lorem ipsum dolor sit amet, sit ea vivendum nominati. At simul doctus aliquip qui. Alia viris usu eu. Ne vis intellegat necessitatibus.
        Nam ex veniam commune. Graece liberavisse mei eu, ad mei magna alienum, vivendum omittantur ea nec. An hendrerit ullamcorper interpretaris sed. Ex suas animal vis, numquam assueverit mel cu, ne vim quis cetero nostrum.</p>
  </div>
  <div className="grid-row"
    style={{ gridTemplateRows:'1fr 5fr' }}
  >
    <div
    style={{
      background:'black', 
      paddingTop:'20px',
      textAlign:'center',
      color:'white'
    }}
  >
    <h1>Services</h1>
  </div>
  <div className="flex-row" style={{ background:'black' }}>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
    <div className="flex-item"></div>
  </div>
  </div>
  <div className="grid-column" 
    style={{ 
      gridTemplateColumns: '1fr 1fr 1fr',
      height: '400px'
     }}
  >
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
  </div>
  </div>
)

export default IndexPage
