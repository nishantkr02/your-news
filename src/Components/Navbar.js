import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className="navbarnavbar-default navbar-fixed-top navbar-expand-lg navbar-light  bg-light  shadow">
    <div className='row'>
    <div className="col-md-8 col-lg-8 col-sm-8 col-8 m-auto" >
             <img src="newsLogo.jpeg" style={{width:"60%" ,height:"90%"}} className="d-inline-block align-top p-2 shadow-light " alt="logo" />
          </div>
    
      <div className=" col d-sm-flex flex-row bd-highlight justify-content-end  m-auto">
        <div className=" bd-highlight">
          
          <Link className="nav-link active fs-5   p-2 " aria-current="page" to="/">Home</Link>
        </div>
        <div className="bd-highlight">
        <Link className="nav-link fs-5 p-2 " to="/About">About</Link>
        </div>
      </div>
      </div>
      
    
  </nav>



  
  )
}

export default Navbar