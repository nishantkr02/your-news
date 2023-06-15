import React, { useState } from 'react'


function NewsCategory({setUrl,setSearch}) {
  const [sk,SetSk]=useState("");
  const updateKey =(evt)=>{
      const updatedKey=evt.target.value;

      SetSk(updatedKey);

   

  }
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
            <div className="d-flex">
              <input 
              className="form-control me-2" 
              type="text" placeholder="Search Your News"
               aria-label="Search"
               value={sk}
               onChange={updateKey}
               />
              <button className="btn btn-outline-success" 
              onClick={()=>setSearch(sk)} >Search</button>
            </div>
          </div>
  
</nav>
</div>

  )
}

export default NewsCategory