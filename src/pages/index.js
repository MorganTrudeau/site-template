import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
  <div 
    style={{ 
      padding:'40px',
      width:'100%', 
      height:'400px',
      background:'black', 
      textAlign:'center',
      color:'white'
    }}
  >
    <h1>Banner</h1>
  </div>
  <div
    style={{ 
      padding:'40px',
      width:'100%',
      textAlign:'center'
    }}
  >
    <h1>Intro</h1>
    <p>Lorem ipsum dolor sit amet, sit ea vivendum nominati. At simul doctus aliquip qui. Alia viris usu eu. Ne vis intellegat necessitatibus.

Nam ex veniam commune. Graece liberavisse mei eu, ad mei magna alienum, vivendum omittantur ea nec. An hendrerit ullamcorper interpretaris sed. Ex suas animal vis, numquam assueverit mel cu, ne vim quis cetero nostrum.</p>
  </div>
  <div
    style={{ 
      padding:'40px',
      paddingBottom:'20px',
      width:'100%',
      background:'black', 
      textAlign:'center',
      color:'white'
    }}
  >
    <h1>Services</h1>
  </div>
  <div className="flex-row" style={{ background:'black' }}>
        <div className="flex-row-space-around">
        <div className="flex-item"></div>
        <div className="flex-item"></div>
        <div className="flex-item"></div>
        <div className="flex-item"></div>
      </div>
      <div className="flex-row-space-around">
        <div className="flex-item"></div>
        <div className="flex-item"></div>
        <div className="flex-item"></div>
        <div className="flex-item"></div>
      </div>
  </div>
  </div>
)

export default IndexPage
