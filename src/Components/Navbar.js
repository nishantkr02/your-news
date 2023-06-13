import React from 'react'

function Navbar() {
  return (
    <div className='container-fluid shadow p-2'>
      <nav className="navbar navbar-expand-lg navbar-light bg-tertiary shadow  " >
          <a className="navbar-brand text-primary h2 bold" href="/NewsPage">YourNews</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link active" aria-current="page" href="/NewsPage">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsPage">Link</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
  
</nav>
</div>

  
  )
}

export default Navbar