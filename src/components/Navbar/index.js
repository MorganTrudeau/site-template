import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div
    style={{
      background: 'rebeccapurple',
      display: 'flex'
    }}
  >
    <div className="banner"
      style={{
        margin: '0 auto',
        maxWidth: 960
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Company
        </Link>
      </h1>
    </div>
    <div className="nav">
      <ul>
        <li ><Link className="nav-item" to="/"> Link </Link></li>
        <li ><Link className="nav-item" to="/"> Link </Link></li>
        <li ><Link className="nav-item" to="/"> Link </Link></li>
        <li ><Link className="nav-item" to="/"> Home </Link></li>
      </ul>
    </div>
  </div>
)

export default Navbar
