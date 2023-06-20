import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-fluid shadow p-2'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow  " >
      
        <div className='col-md-8 col-lg-10'>
          <a className="navbar-brand " href="/NewsPage">
             <img src="newsLogo.jpeg" style={{width:"50%" ,height:"40%"}} className="d-inline-block align-top p-2 shadow-light " alt="logo" />
          </a>
          </div>
          <div className='d-flex '>
        
              <div >
                <Link className="nav-link active h5 text-secondary" aria-current="page" to="/">Home</Link>
              </div>
              <div >
                <Link className="nav-link h4" to="/About">About</Link>
              </div>
            
            </div>
</nav>
</div>

  
  )
}

export default Navbar