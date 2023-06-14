import React from 'react'

function NewsCategory({setUrl}) {
  return (
    <div className='container-fluid shadow p-2'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow  " >
          <a className="navbar-brand text-primary h2 bold" href="/NewsPage">Categories</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                    
            <li className="nav-item">
            <button className='btn' onClick={()=>setUrl("")}>Headlines</button>
             </li> 
            
            <li className="nav-item"> 
            <button className='btn' onClick={()=>setUrl("politics")}>Politics</button>
                </li>
            <li className="nav-item">
                <button className='btn'onClick={()=>setUrl("entertainment")}>Entertainment</button>
                </li> 
            <li className="nav-item">
                <button className='btn'onClick={()=>setUrl("technology")}>Tech</button>
                </li> 
            <li className="nav-item">
                <button className='btn'onClick={()=>setUrl("sports")}>Sports</button>
                </li> 
            <li className="nav-item"> 
              <button className='btn'onClick={()=>setUrl("world")}>World</button>
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

export default NewsCategory