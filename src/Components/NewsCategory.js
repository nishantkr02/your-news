import React, { useState } from 'react'


function NewsCategory({setUrl,setSearch}) {
  const [sk,SetSk]=useState("");
  const updateKey =(evt)=>{
      const updatedKey=evt.target.value;
      SetSk(updatedKey);

  }
  return (
    <div className='container-fluid shadow p-2 mb-2'>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow  " >
          <a className="navbar-brand text-primary h2 bold" href="/NewsPage">Categories</a>
          <button className="navbar-toggler collaspsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                    
            <li className="nav-item">
            <button className='btn' onClick={(evt)=>{
              evt.preventDefault();
              setUrl("")}}>Headlines</button>
             </li>
            <li className="nav-item">
                <button className='btn'onClick={(evt)=>{
                  evt.preventDefault();
                  setUrl("entertainment")}}>Entertainment</button>
                </li> 
            <li className="nav-item">
                <button className='btn'onClick={(evt)=>{
                  evt.preventDefault();
                  setUrl("technology")}}>Tech</button>
                </li> 
            <li className="nav-item">
                <button className='btn'onClick={(evt)=>{
                  evt.preventDefault();
                  setUrl("sports")}}>Sports</button>
                </li> 
            <li className="nav-item"> 
              <button className='btn'onClick={(evt)=>{
                
                evt.preventDefault();
                setUrl("business")}}>Business</button>
            </li> 
            </ul>
            <form className=" col p-2 d-flex flex-row bd-highlight justify-content-end">
              <input 
              className="form-control me-2 shadow" 
              type="text" placeholder="Search Your News"
               aria-label="Search"
               value={sk}
              onChange={updateKey}

               />
              <button className="btn btn-outline-primary shadow-lg" 
              onClick={(evt)=>{
                evt.preventDefault();
                setSearch(sk);
                SetSk("")}} > &#128269;</button>
            </form>
          </div>
  
</nav>

</div>

  )
}

export default NewsCategory