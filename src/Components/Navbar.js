import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div className="col-md-8 col-sm-8 col-8" >
             <img src="newsLogo.jpeg" style={{width:"50%" ,height:"40%"}} className="d-inline-block align-top p-2 shadow-light " alt="logo" />
          </div>
    
      <div className=" col d-flex flex-row bd-highlight justify-content-end">
        <div className=" bd-highlight">
          
          <Link className="nav-link active fs-5  text-secondary " aria-current="page" to="/">Home</Link>
        </div>
        <div className="mx-3 bd-highlight">
        <Link className="nav-link fs-5 " to="/About">About</Link>
        </div>
        
        
      </div>
      
    
  </nav>



  
  )
}

export default Navbar